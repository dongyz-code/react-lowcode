import { createBrowserRouter } from 'react-router-dom';
import { routes as _routes } from './routes';
import { getRouterObject } from './utils';

export const routes = getRouterObject(_routes);
export const router = createBrowserRouter(routes);
