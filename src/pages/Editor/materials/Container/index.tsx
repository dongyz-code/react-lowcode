import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="min-h-24 border border-gray-600 p-5">{children}</div>;
};

export default Container;
