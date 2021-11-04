/**
 * @jest-environment node
 */
import { pipeOperator as to } from '../src';

test('Number => number', () => {
	const f = (v: Number): number => v.valueOf() * 2;
	expect((2)[to](f)[to](f)).toEqual(8);
});

test('number[] => string', () => {
	const f = (source: number[]): string => source.join('-');
	expect([1, 2, 3][to](f)).toEqual('1-2-3');
});

test('Iterable<number> => Generator<number>', () => {
	function* f(source: Iterable<number>): Iterable<number> {
		for (const input of source) {
			yield input * 2;
		}
	}
	expect([...[1, 2, 3][to](f)[to](f)]).toEqual([4, 8, 12]);
});

test('String => number', () => {
	const f = (source: String): number => source.length;
	expect('1-2-3'[to](f)).toEqual(5);
});

test('Iterable<number> => Generator<number>', () => {
	function* f(source: Iterable<number>): Generator<number> {
		for (const input of source) {
			for (let i = 1; i <= input; i++) {
				yield input * i;
			}
		}
	}
	expect([...[1, 2, 3][to](f)]).toEqual([1, 2, 4, 3, 6, 9]);
});
