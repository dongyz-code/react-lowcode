import { Form } from 'antd';
import { useComponentConfig, useComponentStore } from '@/pages/Editor/model';
import JsonForm, { type JsonFormProps } from '@/components/JsonForm';
import type { SettingStyles } from './interface';

const SettingStyles = () => {
  const [form] = Form.useForm();
  const { componentConfig } = useComponentConfig();
  const { selectedComponent, updateComponentProps } = useComponentStore((state) => ({
    selectedComponent: state.selectedComponent,
    updateComponentProps: state.updateComponentProps,
  }));

  const items: JsonFormProps['items'] = [
    {
      name: 'width',
      label: '宽度',
      schema: {
        type: 'inputNumber',
        props: {
          min: 0,
          max: 1280,
        },
      },
    },
    {
      name: 'height',
      label: '高度',
      schema: {
        type: 'inputNumber',
        props: {
          min: 0,
        },
      },
    },
  ];

  const onValuesChange = (changedValues: any, allValues: SettingStyles) => {
    console.log(changedValues, allValues);
  };

  return <JsonForm form={form} items={items} onValuesChange={onValuesChange} />;
};

export default SettingStyles;
