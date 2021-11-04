export const pipeOperator = Symbol('Piping operator');

if (!Symbol.asyncIterator) {
	(Symbol as any).asyncIterator = Symbol.for('asyncIterator');
}

declare global {
	interface Pipable {
		[pipeOperator]<O>(f: (source: this) => O): O;
	}

	interface Iterable<T> extends Pipable {}
	interface AsyncIterable<T> extends Pipable {}
	interface IterableIterator<T> extends Pipable {}
	interface AsyncIterableIterator<T> extends Pipable {}
	interface Generator<T> extends Pipable {}
	interface AsyncGenerator<T> extends Pipable {}
	interface Promise<T> extends Pipable {}
	interface Array<T> extends Pipable {}
	interface String extends Pipable {}
	interface Number extends Pipable {}
}

Object.defineProperty(Object.prototype, pipeOperator, {
	value: function (f: (source: any) => any) {
		return f(this);
	},
});
