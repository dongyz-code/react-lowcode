import { create } from 'zustand';
import Container from '../materials/Container';
import Button from '../materials/Button';
import Page from '../materials/Page';

import type { ComponentType } from 'react';

export interface ComponentConfig {
  name: string;
  defaultProps: Record<string, unknown>;
  component: ComponentType<any>;
}

interface ComponentConfigStore {
  componentConfig: Record<string, ComponentConfig>;
  registerComponent: (name: string, config: ComponentConfig) => void;
}

export const useComponentConfig = create<ComponentConfigStore>((set) => ({
  componentConfig: {
    Container: {
      name: 'Container',
      defaultProps: {},
      component: Container,
    },
    Button: {
      name: 'Button',
      defaultProps: {},
      component: Button,
    },
    Page: {
      name: 'Page',
      defaultProps: {},
      component: Page,
    },
  },
  registerComponent: (name, config) =>
    set((state) => ({
      componentConfig: {
        ...state.componentConfig,
        [name]: config,
      },
    })),
}));
