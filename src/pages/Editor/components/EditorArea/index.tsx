import React, { useMemo, useRef } from 'react';
import { useComponentStore, IComponent } from '../../model/components';
import { useComponentConfig } from '../../model/component-config';
import { useHoverMask } from '../../hooks/useHoverMask';
import { useClickModal } from '../../hooks/useClickModal';

const EditorArea = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { components, selectedId } = useComponentStore();
  const { componentConfig } = useComponentConfig();
  const { handleMouseHover, handleMouseLeave, hoverId, dom } = useHoverMask(containerRef);
  const { handleClick, dom: actionDom } = useClickModal(containerRef);

  const renderComponent = (component: IComponent[]): React.ReactNode => {
    return component.map((item, index) => {
      const config = componentConfig[item.cid];

      if (!config?.component) {
        return null;
      }

      return React.createElement(
        config.component,
        {
          key: index,
          id: item.id,
          cid: item.cid,
          ...config.defaultProps,
          ...item.props,
        },
        renderComponent(item.children || [])
      );
    });
  };

  const componentDom = useMemo(() => renderComponent(components), [components, componentConfig]);

  return (
    <div
      ref={containerRef}
      className="relative box-border h-full overflow-y-auto bg-gray-200 p-5"
      onMouseOver={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="h-full">{componentDom}</div>

      {/* hover mask */}
      {hoverId && hoverId !== selectedId && dom}

      {/* click modal */}
      {actionDom}
    </div>
  );
};

export default EditorArea;
