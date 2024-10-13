export interface IBaseComponentProps {
  /** json item id */
  id: number;

  /** 组件id （类似于Button） */
  cid: string;

  /** 类名 */
  className?: string;

  /** styles */
  style?: React.CSSProperties;
}
