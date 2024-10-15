import { Input, Select, InputNumber, DatePicker, Checkbox, Radio, Switch } from 'antd';
import type { JsonFormItemProps } from './interface';

const JsonFormItem = ({ value, onChange, schema }: JsonFormItemProps) => {
  const { type, props } = schema;
  switch (type) {
    case 'input':
      return <Input {...props} value={value} onChange={onChange} />;
    case 'select':
      return <Select {...props} value={value} onChange={onChange} />;
    case 'switch':
      return <Switch {...props} value={value} onChange={onChange} />;
    case 'inputNumber':
      return <InputNumber {...props} value={value} onChange={onChange} />;
    case 'datePicker':
      return <DatePicker {...props} value={value} onChange={onChange} />;
    case 'checkbox':
      return <Checkbox.Group {...props} value={value} onChange={onChange} />;
    case 'radio':
      return <Radio.Group {...props} value={value} onChange={onChange} />;
    default:
      return null;
  }
};

export default JsonFormItem;
