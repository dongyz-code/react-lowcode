import { Tabs, TabsProps } from 'antd';
import SeetingEvents from './SeetingEvents';
import SettingStyles from './SeetingStyles';
import SeetingAttrbutes from './SeetingAttrbutes';

const SettingArea = () => {
  const items: TabsProps['items'] = [
    {
      key: 'attrbutes',
      label: '属性',
      children: <SeetingAttrbutes />,
    },
    {
      key: 'styles',
      label: '样式',
      children: <SettingStyles />,
    },

    {
      key: 'events',
      label: '事件',
      children: <SeetingEvents />,
    },
  ];

  return (
    <div className="px-2">
      <Tabs centered items={items} />
    </div>
  );
};

export default SettingArea;
