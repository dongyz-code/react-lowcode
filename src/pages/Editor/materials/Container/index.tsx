import type { IContainerProps } from './interface';

const Container = ({ children }: IContainerProps) => {
  return <div className="min-h-24 border border-gray-600 p-5">{children}</div>;
};

export default Container;
