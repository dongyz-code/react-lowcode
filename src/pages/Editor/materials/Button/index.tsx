import { FC } from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps } from './interface';

const Button: FC<ButtonProps> = ({ type, text, cid, id }) => {
  return (
    <AntdButton data-id={id} data-cid={cid} type={type}>
      {text}
    </AntdButton>
  );
};

export default Button;
