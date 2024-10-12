import classNames from 'classnames';
import { useDrag } from 'react-dnd';
import type { MaterialItemProps } from './interface';

const MaterilItem = ({ name, className }: MaterialItemProps) => {
  const [_, drag] = useDrag({
    type: name,
    item: {
      type: name,
    },
  });
  return (
    <div
      ref={drag}
      className={classNames(
        `hover:border-primary m-2 inline-block cursor-move select-none border border-dashed border-gray-300 bg-white px-3 py-2 hover:bg-gray-50`,
        className
      )}
    >
      {name}
    </div>
  );
};

export default MaterilItem;
