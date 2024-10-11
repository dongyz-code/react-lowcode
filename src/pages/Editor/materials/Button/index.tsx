import { FC } from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps } from './interface';

const Button: FC<ButtonProps> = ({ type, text }) => {
  return <AntdButton type={type}>{text}</AntdButton>;
};

export default Button;
