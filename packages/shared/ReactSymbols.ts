// 为了防止滥用ReactElement，需要将ReactElement定义为一个独一无二的值，所以这里使用symbol

// 判断当前环境是否支持symbol
const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0;
