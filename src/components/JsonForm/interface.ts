import type {
  InputProps,
  SelectProps,
  InputNumberProps,
  DatePickerProps,
  CheckboxProps,
  RadioProps,
  SwitchProps,
  FormItemProps,
} from 'antd';

export interface JsonFormItemProps<T extends string = string> {
  /** 表单name */
  name: T;
  /** 表单label */
  label: string;
  /** 表单schema */
  schema: JsonFormSchema;
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
      props: CheckboxProps;
    }
  | {
      type: 'radio';
      props: RadioProps;
    }
  | {
      type: 'switch';
      props: SwitchProps;
    };
