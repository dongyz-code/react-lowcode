import React, { useRef } from 'react';
import { useComponentStore, IComponent } from '../../model/components';
import { useComponentConfig } from '../../model/component-config';
import { useHoverMask } from '../../hooks/useHoverMask';

const EditorArea = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { components } = useComponentStore();
  const { componentConfig } = useComponentConfig();
  const { handleMouseHover, handleMouseLeave, dom } = useHoverMask(containerRef);

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

  return (
    <div
      ref={containerRef}
      className="relative box-border h-full bg-gray-200 p-5"
      onMouseOver={handleMouseHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full">{renderComponent(components)}</div>

      {/* hover mask */}
      {dom}
    </div>
  );
};

export default EditorArea;
