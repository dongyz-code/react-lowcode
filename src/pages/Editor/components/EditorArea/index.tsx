import React from 'react';
import { useComponentStore, IComponent } from '../../model/components';
import { useComponentConfig } from '../../model/component-config';

const EditorArea = () => {
  const { components } = useComponentStore();
  const { componentConfig } = useComponentConfig();

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

  return <div className="h-full">{renderComponent(components)}</div>;
};

export default EditorArea;
