import classNames from 'classnames';
import { useMaterialDrop } from '../../hooks/useMaterialDrop';
import type { IPagerProps } from './interface';

function Page({ children, id }: IPagerProps) {
  const { drop, canDrop } = useMaterialDrop(['Button', 'Container'], id);

  return (
    <div
      ref={drop}
      className={classNames('box-border h-full border-dashed border-primary p-5', {
        'border-2': canDrop,
      })}
    >
      {children}
    </div>
  );
}

export default Page;
