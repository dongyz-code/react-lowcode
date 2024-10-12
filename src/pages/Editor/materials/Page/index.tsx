import { useDrop } from 'react-dnd';
import { App } from 'antd';
import classNames from 'classnames';
import type { IPagerProps } from './interface';

function Page({ children }: IPagerProps) {
  const { message } = App.useApp();

  const [{ canDrop }, drop] = useDrop({
    accept: ['Button', 'Container'],
    drop: (item: { type: string }) => {
      message.success(`You dropped a ${item.type}`);
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  });
  console.log('canDrop', canDrop);

  return (
    <div
      ref={drop}
      className={classNames('border-primary box-border h-full border-dashed p-5', {
        'border-2': canDrop,
      })}
    >
      {children}
    </div>
  );
}

export default Page;
