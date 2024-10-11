import { useMemo } from 'react';
import { Button } from 'antd';
import { snowflake } from '@/utils/snow';
import { useComponentStore } from '../../model/components';
import { useComponentConfig } from '../../model/component-config';

const MeterilArea = () => {
  const { componentConfig } = useComponentConfig();
  const { addComponent } = useComponentStore();

  const components = useMemo(() => {
    return Object.values(componentConfig);
  }, [componentConfig]);

  return (
    <div>
      {components.map((component) => (
        <div
          key={component.name}
          className="m-2 inline-block cursor-move rounded-md border border-dashed border-gray-300 bg-white p-4 hover:bg-gray-100 hover:shadow-md"
        >
          {component.name}
        </div>
      ))}
    </div>
  );
};

export default MeterilArea;
