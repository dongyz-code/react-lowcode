import { useMemo } from 'react';
import { Button } from 'antd';
import { snowflake } from '@/utils/snow';
import { useComponentStore } from '../../model/components';
import { useComponentConfig } from '../../model/component-config';
import MaterilItem from './MaterilItem';

const MeterilArea = () => {
  const { componentConfig } = useComponentConfig();
  const { addComponent } = useComponentStore();

  const components = useMemo(() => {
    return Object.values(componentConfig);
  }, [componentConfig]);

  return (
    <div>
      {components.map((component, i) => (
        <MaterilItem key={component.cid + i} cid={component.cid} />
      ))}
    </div>
  );
};

export default MeterilArea;
