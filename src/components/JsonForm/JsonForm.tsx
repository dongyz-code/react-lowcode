import { Form } from 'antd';
import JsonFormItem from './JsonFormItem';
import type { JsonFormProps } from './interface';

const JsonForm = <T extends Record<string, unknown>>({ items, ...props }: JsonFormProps<T>) => {
  return (
    <Form {...props}>
      {items?.map((item) => (
        <Form.Item key={item.name} label={item.label} name={item.name} {...item.formItemProps}>
          <JsonFormItem {...item} />
        </Form.Item>
      ))}
    </Form>
  );
};

export default JsonForm;
