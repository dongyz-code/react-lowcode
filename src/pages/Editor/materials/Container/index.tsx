import classNames from 'classnames';
import { useMaterialDrop } from '../../hooks/useMaterialDrop';
import type { IContainerProps } from './interface';

const Container = ({ children, id }: IContainerProps) => {
  const { drop, canDrop } = useMaterialDrop(['Button', 'Container'], id);

  return (
    <div
      ref={drop}
      className={classNames('min-h-24 border border-gray-600 p-5', {
        'border-primary': canDrop,
        'border-dashed': canDrop,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
