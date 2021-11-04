# Pipe operator

A pipelining operator to allow postfix syntax for function invocation in the absence of a [real pipelining operator](https://tc39.es/proposal-pipeline-operator/).

## Installation and Usage

```sh
pnpm i @pauliojanpera/pipe-operator
```

```ts
import { pipeOperator as to } from '../src';

// f(f(2)) == 8
const f = (v: Number): number => v.valueOf() * 2;
console.log((2)[to](f)[to](f)); // '8'

// g([1,2,3])
const g = (source: number[]): string => source.join('-');
console.log([1, 2, 3][to](f)).toEqual('1-2-3'); // '1-2-3'
```

## Building/Testing

- `pnpm build` build and package
- `pnpm t` run tests
- `pnpm pub` publish ./packages/pipe-operator-latest.tgz
