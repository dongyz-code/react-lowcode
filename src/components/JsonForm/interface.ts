import { Checkbox, Radio } from 'antd';

import type {
  InputProps,
  SelectProps,
  InputNumberProps,
  DatePickerProps,
  SwitchProps,
  FormItemProps,
  GetProps,
  FormInstance,
} from 'antd';

export interface JsonFormItemProps<T extends string = string> {
  /** 表单name */
  name: T;
  /** 表单label */
  label: string;
  /** 表单schema */
  schema: JsonFormSchema;
  /** 表单值 */
  value?: any;
  /** 表单值变化回调 */
  onChange?: (value: any) => void;
  /** FormItemProps */
  formItemProps?: FormItemProps;
}

export type JsonFormSchema =
  | {
      type: 'input';
      props: InputProps;
    }
  | {
      type: 'select';
      props: SelectProps;
    }
  | {
      type: 'inputNumber';
      props: InputNumberProps;
    }
  | {
      type: 'datePicker';
      props: DatePickerProps;
    }
  | {
      type: 'checkbox';
      props: GetProps<typeof Checkbox.Group>;
    }
  | {
      type: 'radio';
      props: GetProps<typeof Radio.Group>;
    }
  | {
      type: 'switch';
      props: SwitchProps;
    };

export interface JsonFormProps<T extends object = Record<string, unknown>> {
  initialValues?: T;
  form?: FormInstance<T>;
  items?: JsonFormItemProps[];
  layout?: 'horizontal' | 'vertical' | 'inline';
  size?: 'small' | 'middle' | 'large';
  disabled?: boolean;
  colon?: boolean;
  labelAlign?: 'left' | 'right';
  labelCol?: FormItemProps['labelCol'];
  wrapperCol?: FormItemProps['wrapperCol'];
  onFinish?: (form: T) => void;
  onFinishFailed?: (errorInfo: any) => void;
  onValuesChange?: (changedValues: any, allValues: T) => void;
}
