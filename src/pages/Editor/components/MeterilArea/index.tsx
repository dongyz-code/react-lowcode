import { useMemo } from 'react';
import { useComponentConfig } from '../../model';
import MaterilItem from './MaterilItem';

const MeterilArea = () => {
  const { componentConfig } = useComponentConfig();

  const components = useMemo(() => {
    return Object.values(componentConfig);
  }, [componentConfig]);

  return (
    <div>
      {components.map((component, i) => (
        <MaterilItem key={component.cid + i} componentConfig={component} />
      ))}
    </div>
  );
};

export default MeterilArea;
