import { Form } from 'antd';
import { useDebounceFn } from 'ahooks';
import { useComponentConfig, useComponentStore } from '@/pages/Editor/model';
import JsonForm from '@/components/JsonForm';

const SettingStyles = () => {
  const [form] = Form.useForm();
  const { componentConfig } = useComponentConfig();
  const { selectedComponent, updateComponentStyles } = useComponentStore();

  const _onValuesChange = (_: any, allValues: React.CSSProperties) => {
    if (!selectedComponent?.id) return;
    updateComponentStyles(selectedComponent?.id, allValues);
  };

  const { run: onValuesChange } = useDebounceFn(_onValuesChange, { wait: 300 });

  if (!selectedComponent) return null;
  const cid = selectedComponent?.cid;

  return <JsonForm form={form} items={componentConfig[cid].styleSeeter} onValuesChange={onValuesChange} />;
};

export default SettingStyles;
