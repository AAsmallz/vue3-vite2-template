export interface IMenu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  route?: string;
  path?: string;
  iframe_link?: string;
  children?: Menu[];
  nested?: boolean;
}
