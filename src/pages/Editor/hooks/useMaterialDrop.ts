import { useDrop } from 'react-dnd';
import { snowflake } from '@/utils';
import { useComponentConfig, useComponentStore } from '../model';

export const useMaterialDrop = (accept: string[], id: number) => {
  const addComponent = useComponentStore((state) => state.addComponent);
  const componentConfig = useComponentConfig((state) => state.componentConfig);

  const [{ canDrop }, drop] = useDrop({
    accept: accept,
    drop: (item: { cid: string }, monitor) => {
      const config = componentConfig[item.cid];

      if (monitor.didDrop()) {
        return;
      }

      addComponent(
        {
          id: snowflake(),
          cid: item.cid,
          props: config.defaultProps,
        },
        id
      );
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  });

  return {
    canDrop,
    drop,
  };
};
