import { useState, useMemo, MouseEventHandler, RefObject, useEffect } from 'react';
import { useComponentStore } from '../model';
import { findNodeById } from '@/utils';

const defaultPosition = {
  left: 0,
  top: 0,
  width: 0,
  height: 0,
  labelLeft: 0,
  labelTop: 0,
};

export const useHoverMask = (containerRef: RefObject<HTMLDivElement>) => {
  const commponents = useComponentStore((state) => state.components);
  const [hoverId, setHoverId] = useState<number>();
  const [postion, setPosition] = useState({ ...defaultPosition });

  const handleMouseHover: MouseEventHandler = (e) => {
    const path = e.nativeEvent.composedPath();

    for (let i = 0; i < path.length; i++) {
      const element = path[i] as HTMLElement;
      const data_id = element?.dataset?.['id'];
      const real_data_id = Number(data_id);
      if (element instanceof HTMLElement && real_data_id) {
        setHoverId(real_data_id);
        return;
      }
    }
  };

  const handleMouseLeave = () => {
    setHoverId(undefined);
    setPosition({ ...defaultPosition });
  };

  const updatePosition = (id: number) => {
    const container = containerRef.current;
    if (!container || !id) {
      return;
    }

    const element = container.querySelector(`[data-id="${id}"]`);
    if (!element) {
      return;
    }

    const { top, left, width, height } = element.getBoundingClientRect();
    const { top: containerTop, left: containerLeft } = container.getBoundingClientRect();

    const labelLeft = left - containerLeft + container.scrollLeft + width;
    const labelTop = top - containerTop + container.scrollTop;

    setPosition({
      left: left - containerLeft + container.scrollLeft,
      top: top - containerTop + container.scrollTop,
      width,
      height,
      labelLeft: labelLeft,
      labelTop: labelTop,
    });
  };

  const currComponent = useMemo(() => {
    if (!hoverId) {
      return null;
    }

    const component = findNodeById({
      tree: commponents,
      id: hoverId,
    });

    return component;
  }, [hoverId, commponents]);

  const dom = useMemo(() => {
    if (!hoverId) {
      return null;
    }

    return (
      <>
        <div
          className="pointer-events-none absolute z-20 box-border select-none rounded border border-primary bg-primary/5"
          style={{
            left: postion.left,
            top: postion.top,
            width: postion.width,
            height: postion.height,
          }}
        ></div>
        <div
          className="absolute z-30 inline-flex cursor-pointer items-center whitespace-nowrap rounded-sm bg-primary/50 px-2 text-sm text-white"
          style={{
            left: postion.labelLeft,
            top: postion.labelTop,
            transform: 'translate(-100%, -100%)',
          }}
        >
          {currComponent?.cid}
        </div>
      </>
    );
  }, [hoverId, postion, currComponent]);

  useEffect(() => {
    if (hoverId) {
      updatePosition(hoverId);
    }
  }, [commponents, hoverId]);

  return {
    handleMouseLeave,
    handleMouseHover,
    hoverId,
    dom,
  };
};
