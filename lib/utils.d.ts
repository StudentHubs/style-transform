import { CSSMap, CSSProps, CSSTree } from './typings';
export declare const undefOrNull: (x: any) => boolean;
export declare const isObject: (v: any) => boolean;
export declare const flatten: <T>(array: (T | T[] | undefined)[]) => T[];
export declare const unique: <T>(array: (T | T[] | undefined)[]) => T[];
export declare const mapToTree: (styleMap: CSSMap) => CSSTree<any>;
export declare const treeToMap: (styleTree?: CSSProps | (CSSProps & {
    [x: string]: CSSTree<any>;
}) | undefined) => CSSMap;
export declare const mergeMaps: (...styleMaps: CSSMap[]) => CSSMap;
