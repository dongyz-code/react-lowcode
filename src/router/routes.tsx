import { lazy } from 'react';
import type { IRoute } from './interface';

export const routes: IRoute[] = [
  {
    path: '/',
    component: lazy(() => import('@/layout/BasicLayout')),
    children: [
      {
        path: '',
        redirect: 'lowcode-editor',
      },
      {
        name: '首页',
        path: 'home',
        component: lazy(() => import('@/pages/Home')),
      },
      {
        name: 'LowCode Editor',
        path: 'lowcode-editor',
        component: lazy(() => import('@/pages/Editor')),
      },
    ],
  },
];
