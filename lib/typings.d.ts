import * as CSS from 'csstype';
export declare type Falsy = null | undefined | false;
export declare type Obj<T = any> = {
    [key: string]: T;
};
export interface CSSProps extends CSS.Properties<string | number> {
    [index: string]: any;
}
export declare type CSSTree<T extends string = any> = CSSProps | (CSSProps & {
    [P in T]: CSSTree<T>;
});
export declare type CSSMap = {
    [k: string]: CSSProps;
};
export declare type Style = CSSProps & {
    defaults(...styleTrees: (CSSTree | undefined)[]): Style;
    expandFor(...props: string[]): Style;
    filter(...props: string[]): Style;
    map(map: (props: CSSProps) => CSSProps): Style;
    merge(...styleTrees: (CSSTree | undefined)[]): Style;
    mergeKeys(...args: (string | Obj<boolean>)[]): Style;
    numeric(...props: string[]): Style;
    scale(scales?: Obj<number | Obj<number>>): Style;
};
