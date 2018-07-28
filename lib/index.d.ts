export { CSSProps, CSSTree, Style } from './typings';
import { CSSProps, CSSTree, Style } from './typings';
declare const _default: (style: CSSProps | (CSSProps & {
    [x: string]: CSSTree<any>;
}) | Style | undefined) => Style;
export default _default;
