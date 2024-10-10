/**
 * @description: 树形数据处理工具类
 */

/**
 * 使用深度优先搜索查找具有特定 ID 的节点，支持自定义 ID 和 children 的字段名
 * @param tree 树形数据
 * @param id 要查找的节点 ID
 * @param idKey 节点 ID 字段名
 * @param childrenKey 子节点字段名
 */
export function findNodeById<T extends object>({
  tree,
  id,
  idKey = 'id',
  childrenKey = 'children',
}: {
  tree: T[];
  id: React.Key;
  idKey?: string;
  childrenKey?: string;
}) {
  const queue = tree;
  while (queue.length) {
    const node = queue.shift() as Record<string, unknown>;
    if (node?.[idKey] === id) {
      return node as T;
    }
    if (Array.isArray(node?.[childrenKey])) {
      queue.push(...node[childrenKey]);
    }
  }
  return null;
}
