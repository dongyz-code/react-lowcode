import classNames from 'classnames';
import { useMaterialDrop } from '../../hooks/useMaterialDrop';
import type { IPagerProps } from './interface';

function Page({ children, id, cid, className }: IPagerProps) {
  const { drop, canDrop } = useMaterialDrop(['Button', 'Container'], id);

  return (
    <div
      ref={drop}
      data-id={id}
      data-cid={cid}
      className={classNames('box-border h-full border-dashed border-primary p-5', className, {
        'border-2': canDrop,
      })}
    >
      {children}
    </div>
  );
}

export default Page;
