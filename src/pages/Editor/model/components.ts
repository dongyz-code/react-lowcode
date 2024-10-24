import { create } from 'zustand';
import { findNodeById, snowflake } from '@/utils';

export interface IComponent {
  id: number;
  cid: string;
  props: Record<string, unknown>;
  styles?: React.CSSProperties;
  children?: IComponent[];
  parentId?: number;
}

export interface IComponentSotre {
  selectedId?: number;
  selectedComponent?: IComponent;
  components: IComponent[];

  addComponent: (component: IComponent, parentId?: number) => void;
  removeComponent: (id: number) => void;
  updateComponentProps: (id: number, props: Record<string, unknown>) => void;
  updateComponentStyles: (id: number, styles?: React.CSSProperties) => void;
  setSelectedComponent: (id?: number) => void;
}

export const useComponentStore = create<IComponentSotre>((set, get) => ({
  components: [
    {
      id: snowflake(),
      cid: 'Page',
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
          component.parentId = pid;
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

    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
    }));
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

  setSelectedComponent: (id) => {
    if (!id) {
      set(() => ({
        selectedId: undefined,
        selectedComponent: undefined,
      }));
      return;
    }

    const comp = findNodeById({
      tree: get().components,
      id,
    });

    set(() => ({
      selectedId: id,
      selectedComponent: comp ?? undefined,
    }));
  },

  updateComponentStyles: (id, styles) => {
    const component = findNodeById({
      tree: get().components,
      id,
    });
    if (component) {
      component.styles = styles;
      return set((state) => ({ components: [...state.components] }));
    }
  },
}));
