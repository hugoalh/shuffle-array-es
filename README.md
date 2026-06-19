# Shuffle Array (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[GitHub](https://github.com/hugoalh/shuffle-array-es)
● [JSR](https://jsr.io/@hugoalh/shuffle-array)
● [NPM](https://www.npmjs.com/package/@hugoalh/shuffle-array)

An ECMAScript module to shuffle the array's indexes.

## 🎯 Runtime Targets

Any runtime which support ECMAScript should able to use this; These runtimes are officially supported:

- **[Bun](https://bun.sh/)** >= v1.1.0
- **[Deno](https://deno.land/)** >= v2.1.0
- **[NodeJS](https://nodejs.org/)** >= v20.9.0

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources & Entrypoints

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/shuffle-array-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/shuffle-array[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/shuffle-array[@{Tag}]
  ```

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

> [!NOTE]
> - Different runtimes have vary support for the sources and entrypoints, visit the runtime documentation for more information.
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## 🧩 APIs

- ```ts
  function shuffleArray<T>(item: readonly T[], prng?: PseudoRandomNumberGenerator): T[];
  ```
- ```ts
  type PseudoRandomNumberGenerator = () => number;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/shuffle-array)

## ✍️ Examples

- ```ts
  const item = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];

  shuffleArray(item);
  //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]

  shuffleArray(item);
  //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
  ```
