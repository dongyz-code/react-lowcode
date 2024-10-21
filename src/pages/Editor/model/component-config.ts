import React from 'react';
import { create } from 'zustand';
import Container from '../materials/Container';
import Button from '../materials/Button';
import Page from '../materials/Page';

import type { ComponentType } from 'react';
import type { JsonFormItemProps } from '@/components/JsonForm/interface';

export interface ComponentConfig {
  cid: string;
  name: string;
  desc?: string;
  icon?: React.ReactNode;
  seeter: JsonFormItemProps[];
  styleSeeter: JsonFormItemProps[];
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
        {
          name: 'type',
          label: '按钮类型',
          schema: {
            type: 'radio',
            props: {
              options: ['primary', 'secondary', 'dashed', 'text'],
            },
          },
        },
        {
          name: 'text',
          label: '文本内容',
          schema: {
            type: 'input',
            props: {
              placeholder: '请输入文本内容',
            },
          },
        },
      ],
      styleSeeter: [
        {
          name: 'width',
          label: '宽度',
          schema: {
            type: 'inputNumber',
            props: {
              min: 0,
            },
          },
        },
        {
          name: 'height',
          label: '高度',
          schema: {
            type: 'inputNumber',
            props: {
              min: 0,
            },
          },
        },
      ],
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
