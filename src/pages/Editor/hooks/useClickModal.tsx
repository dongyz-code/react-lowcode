import { MouseEventHandler, RefObject, useEffect, useMemo, useState } from 'react';
import { useComponentStore } from '../model';
import { Popconfirm } from 'antd';
import { useScroll, useWindowSize } from 'react-use';
import { DeleteOutlined } from '@ant-design/icons';

const defaultPosition = {
  left: 0,
  top: 0,
  width: 0,
  height: 0,
  labelLeft: 0,
  labelTop: 0,
};

export const useClickModal = (containerRef: RefObject<HTMLDivElement>) => {
  const { selectedId, selectedComponent, setSelectedComponent, removeComponent } = useComponentStore();
  const [postion, setPosition] = useState({ ...defaultPosition });
  const { x: containerX, y: containerY } = useScroll(containerRef);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const updatePosition = (id?: number) => {
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

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (!target) {
      return;
    }

    const ele = target.closest('[data-id]') as HTMLDivElement;
    const id = ele?.dataset.id;
    if (ele && id) {
      setSelectedComponent(Number(id));
    }
  };

  const handleDeleteComponent = (id: number) => {
    removeComponent(id);
    setSelectedComponent(undefined);
  };

  useEffect(() => {
    updatePosition(selectedId);
  }, [selectedId, containerX, containerY, windowWidth, windowHeight]);

  const dom = useMemo(() => {
    if (!selectedId) {
      return null;
    }

    return (
      <>
        <div
          className="translate pointer-events-none absolute z-20 box-border transform-gpu select-none rounded border border-primary bg-primary/5"
          style={{
            left: postion.left,
            top: postion.top,
            width: postion.width,
            height: postion.height,
          }}
        ></div>
        <div
          className="absolute z-30 inline-flex transform-gpu cursor-pointer items-center whitespace-nowrap rounded-sm bg-primary/50 px-2 text-sm text-white"
          style={{
            left: postion.labelLeft,
            top: postion.labelTop,
            transform: 'translate(-100%, -100%)',
          }}
        >
          <Popconfirm title="确定要删除该组件吗?" onConfirm={() => handleDeleteComponent(selectedId)}>
            <DeleteOutlined />
          </Popconfirm>
        </div>
      </>
    );
  }, [selectedId, selectedComponent, postion]);

  return {
    handleClick,
    selectedId,
    selectedComponent,
    dom,
  };
};
