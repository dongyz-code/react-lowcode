import { create } from 'zustand';
import Container from '../materials/Container';
import Button from '../materials/Button';
import Page from '../materials/Page';

import type { ComponentType } from 'react';

export interface ComponentConfig {
  cid: string;
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
      defaultProps: {},
      component: Container,
    },
    Button: {
      cid: 'Button',
      defaultProps: {
        text: '按钮',
      },
      component: Button,
    },
    Page: {
      cid: 'Page',
      defaultProps: {
        className: 'bg-white'
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
