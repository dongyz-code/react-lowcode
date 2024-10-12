import { useComponentStore } from '../../model';

const SettingArea = () => {
  const components = useComponentStore((state) => state.components);

  return (
    <>
      <pre>{JSON.stringify(components, null, 2)}</pre>
    </>
  );
};

export default SettingArea;
