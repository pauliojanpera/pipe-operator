# Pipe operator

A pipelining operator to allow postfix syntax for function invocation in the absence of a [real pipelining operator](https://tc39.es/proposal-pipeline-operator/).

## Installation and Usage

```sh
pnpm i @pauliojanpera/pipe-operator
```

```ts
import { pipeOperator as to } from '@pauliojanpera/pipe-operator';

// f(f(2)) == 8
const f = (v: Number): number => v.valueOf() * 2;
console.log((2)[to](f)[to](f)); // '8'

// g([1,2,3]) == '1-2-3'
const g = (numbers: number[]): string => numbers.join('-');
console.log([1, 2, 3][to](g)); // '1-2-3'
```

## Building/Testing

- `pnpm i -g verdaccio` install the Verdaccio package registry proxy
- `pnpm dev` run Verdaccio
- `pnpm build` build and publish in Verdaccio locally
- `pnpm t` run tests
- `pnpm pub` publish ./dist

