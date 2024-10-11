import React from 'react';
import { useComponentStore, IComponent } from '../../model/components';
import { useComponentConfig } from '../../model/component-config';

const EditorArea = () => {
  const { components } = useComponentStore();
  const { componentConfig } = useComponentConfig();

  const renderComponent = (component: IComponent[]): React.ReactNode => {
    return component.map((item, index) => {
      const config = componentConfig[item.name];

      if (!config?.component) {
        return null;
      }

      return React.createElement(
        config.component,
        {
          key: index,
          ...config.defaultProps,
          ...item.props,
        },
        renderComponent(item.children || [])
      );
    });
  };

  return <div className="editor-area">{renderComponent(components)}</div>;
};

export default EditorArea;
