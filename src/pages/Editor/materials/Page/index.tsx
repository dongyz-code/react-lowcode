import { PropsWithChildren } from 'react';

function Page({ children }: PropsWithChildren) {
  return <div className="box-border h-full p-5">{children}</div>;
}

export default Page;
