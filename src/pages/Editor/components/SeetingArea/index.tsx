import { Tabs } from 'antd';
import { useComponentStore } from '../../model';

const SettingArea = () => {
  const components = useComponentStore((state) => state.components);

  return (
    <div className="px-2">
      <Tabs centered>
        <Tabs.TabPane tab="属性" key="attrbutes">
          1
        </Tabs.TabPane>
        <Tabs.TabPane tab="样式" key="styles">
          2
        </Tabs.TabPane>
        <Tabs.TabPane tab="事件" key="events">
          3
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default SettingArea;
