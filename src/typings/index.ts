import CSSProps from './cssProperties';

export type Falsy = null | undefined | false;

export type Obj<T = any> = { [key: string]: T };

export { default as CSSProps } from './cssProperties';
export type CSSTree<T extends string = any> =
  | CSSProps
  | (CSSProps & { [P in T]: CSSTree<T> });
export type CSSMap = { [k: string]: CSSProps };

export interface Style extends CSSProps {
  defaults(...styleTrees: (CSSTree | undefined)[]): Style;
  expandFor(...props: string[]): Style;
  filter(...props: string[]): Style;
  filterKeys(...props: string[]): Style;
  map(map: (props: CSSProps) => CSSProps): Style;
  merge(...styleTrees: (CSSTree | undefined)[]): Style;
  mergeKeys(...args: (string | Obj<boolean>)[]): Style;
  numeric(...props: string[]): Style;
  scale(scales?: Obj<number | Obj<number>>): Style;
}
