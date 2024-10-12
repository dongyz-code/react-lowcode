import { ButtonType } from 'antd/es/button';
import { IBaseComponentProps } from '../../types';

export interface ButtonProps extends IBaseComponentProps {
  text: string;
  type: ButtonType;
}
