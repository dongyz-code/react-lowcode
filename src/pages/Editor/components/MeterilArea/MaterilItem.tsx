import classNames from 'classnames';
import { useDrag } from 'react-dnd';
import type { MaterialItemProps } from './interface';

const MaterilItem = ({ componentConfig, className }: MaterialItemProps) => {
  const [_, drag] = useDrag({
    type: componentConfig.cid + '',
    item: {
      cid: componentConfig.cid,
    },
  });
  return (
    <div
      ref={drag}
      className={classNames(
        `m-2 inline-block cursor-move select-none border border-dashed border-gray-300 bg-white px-3 py-1 hover:border-primary hover:bg-gray-50`,
        className
      )}
    >
      {componentConfig.name}
    </div>
  );
};

export default MaterilItem;
