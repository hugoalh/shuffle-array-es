# Shuffle Array (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/shuffle-array-es](https://img.shields.io/github/v/release/hugoalh/shuffle-array-es?label=hugoalh/shuffle-array-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/shuffle-array-es")](https://github.com/hugoalh/shuffle-array-es)
[![JSR: @hugoalh/shuffle-array](https://img.shields.io/jsr/v/@hugoalh/shuffle-array?label=@hugoalh/shuffle-array&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/shuffle-array")](https://jsr.io/@hugoalh/shuffle-array)
[![NPM: @hugoalh/shuffle-array](https://img.shields.io/npm/v/@hugoalh/shuffle-array?label=@hugoalh/shuffle-array&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/shuffle-array")](https://www.npmjs.com/package/@hugoalh/shuffle-array)

An ECMAScript (JavaScript & TypeScript) module to shuffle the array's indexes.

## 🔰 Begin

### 🎯 Targets

| **Targets** | **Remote** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh/shuffle-array-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/shuffle-array[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/shuffle-array[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Runtime Permissions

*This module does not request any runtime permission.*

## 🧩 APIs

- ```ts
  function shuffleArray<T>(item: readonly T[], prng?: PseudoRandomNumberGenerator): T[];
  ```
- ```ts
  type PseudoRandomNumberGenerator = () => number;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/documentation_generator/)
>   - [JSR](https://jsr.io/@hugoalh/shuffle-array)

## ✍️ Examples

- ```ts
  const item = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];

  shuffleArray(item);
  //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]

  shuffleArray(item);
  //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
  ```
