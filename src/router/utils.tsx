import { Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { IRoute } from './interface';
import BlankLayout from '@/layout/BlankLayout';

export const lazyLoadComponent = (Component: React.ComponentType) => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Component />
    </Suspense>
  );
};

export function getRouterObject(routes?: IRoute[]): RouteObject[] {
  if (!routes?.length) return [];

  return routes.map((route) => {
    const { name, path, component: Component, children, redirect, ...rest } = route;
    let element = null;
    if (Component) {
      element = lazyLoadComponent(Component);
    }

    if (redirect) {
      element = <Navigate to={redirect} />;
    }

    if (children) {
      element = Component ? <Component /> : <BlankLayout />;
    }
    return {
      ...rest,
      name,
      path,
      element,
      children: getRouterObject(children),
    };
  });
}
