/**
 * @description: 树形数据处理工具类
 */

/**
 * 使用深度优先搜索查找具有特定 ID 的节点，支持自定义 ID 和 children 的字段名, 不能改变源数据
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
  function dfs(nodes: T[]): T | null {
    for (const node of nodes) {
      const nodeAsRecord = node as unknown as Record<string, any>;
      if (nodeAsRecord[idKey] === id) {
        return node;
      }
      if (nodeAsRecord[childrenKey] && nodeAsRecord[childrenKey].length > 0) {
        const result = dfs(nodeAsRecord[childrenKey]);
        if (result) return result;
      }
    }
    return null;
  }

  // 开始从树的根节点开始搜索
  return dfs(tree);
}
