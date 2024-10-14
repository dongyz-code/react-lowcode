import { create } from 'zustand';
import Container from '../materials/Container';
import Button from '../materials/Button';
import Page from '../materials/Page';

import type { ComponentType } from 'react';
import React from 'react';

export interface ComponentSeeter {
  name: string;
  label: string;
  type: string;
  [key: string]: any;
}

export interface ComponentConfig {
  cid: string;
  name: string;
  desc?: string;
  icon?: React.ReactNode;
  seeter: ComponentSeeter[];
  styleSeeter: ComponentSeeter[];
  defaultProps: Record<string, unknown>;
  component: ComponentType<any>;
}

interface ComponentConfigStore {
  componentConfig: Record<string, ComponentConfig>;
  registerComponent: (cid: string, config: ComponentConfig) => void;
}

export const useComponentConfig = create<ComponentConfigStore>((set) => ({
  componentConfig: {
    Container: {
      cid: 'Container',
      name: '容器',
      desc: '用于布局的容器组件',
      seeter: [],
      styleSeeter: [],
      defaultProps: {},
      component: Container,
    },
    Button: {
      cid: 'Button',
      name: '按钮',
      desc: '用于触发业务逻辑的按钮组件',
      seeter: [
        { name: 'type', label: '按钮类型', type: 'radio', options: ['primary', 'secondary', 'dashed', 'text'] },
        { name: 'text', label: '文本内容', type: 'input' },
      ],
      styleSeeter: [],
      defaultProps: {
        text: '按钮',
      },
      component: Button,
    },
    Page: {
      cid: 'Page',
      name: '页面',
      desc: '用于页面整体布局的页面组件',
      seeter: [],
      styleSeeter: [],
      defaultProps: {
        className: 'bg-white',
      },
      component: Page,
    },
  },
  registerComponent: (cid, config) =>
    set((state) => ({
      componentConfig: {
        ...state.componentConfig,
        [cid]: config,
      },
    })),
}));
