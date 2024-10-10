export type RouteName = '首页' | 'LowCode Editor' | 'About' | 'Contact' | 'NotFound';

export interface IRoute {
  name?: RouteName;
  path: string;
  component?: React.ComponentType;
  meta?: Record<string, unknown>;
  children?: IRoute[];
  redirect?: string;
}
