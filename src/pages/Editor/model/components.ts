import { create } from 'zustand';
import { findNodeById, snowflake } from '@/utils';

export interface IComponent {
  id: number;
  name: string;
  props: Record<string, unknown>;
  children?: IComponent[];
  parentId?: number;
}

export interface IComponentSotre {
  components: IComponent[];

  addComponent: (component: IComponent, parentId?: number) => void;
  removeComponent: (id: number) => void;
  updateComponentProps: (id: number, props: Record<string, unknown>) => void;
}

export const useComponentStore = create<IComponentSotre>((set, get) => ({
  components: [
    {
      id: snowflake(),
      name: 'Page',
      props: {},
      children: [],
    },
  ],

  addComponent: (component, pid) =>
    set((state) => {
      if (pid) {
        const parent = findNodeById({
          tree: state.components,
          id: pid,
        });

        if (parent) {
          parent.children = parent.children || [];
          parent.children.push(component);
        }

        return { components: [...state.components] };
      }

      return { components: [...state.components, component] };
    }),

  removeComponent: (id) => {
    if (!id) {
      return;
    }

    const component = findNodeById({
      tree: get().components,
      id,
    });

    if (component?.parentId) {
      const parent = findNodeById({
        tree: get().components,
        id: component.parentId,
      });

      if (parent) {
        parent.children = parent.children?.filter((c) => c.id !== id) || [];
        set((state) => ({ components: [...state.components] }));
      }
    }
  },

  updateComponentProps: (id, props) => {
    const component = findNodeById({
      tree: get().components,
      id,
    });
    if (component) {
      component.props = props;
      return set((state) => ({ components: [...state.components] }));
    }
  },
}));
