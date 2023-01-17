// 类型定义
export type Type = any;
export type Key = any;
export type Ref = any;
export type Props = any;
export type ElementType = any;
export interface ReactElement {
	$$typeof: symbol | number;
	type: Type;
	key: Key;
	props: Props;
	ref: Ref;
	__mark: string;
}
