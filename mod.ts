/**
 * A pseudo random number generator which takes zero arguments and returns a random number in the range of `>= 0` and `< 1`.
 */
export type PseudoRandomNumberGenerator = () => number;
/**
 * Shuffle the array's indexes.
 * @template {unknown} T
 * @param {readonly T[]} item Array that need to shuffle indexes.
 * @param {PseudoRandomNumberGenerator} [prng=Math.random] A pseudo random number generator which takes zero arguments and returns a random number in the range of `>= 0` and `< 1`. This uses {@linkcode Math.random} by default, or specify a better pseudo random number generator.
 * @returns {T[]} An indexes shuffled array.
 * @example
 * ```ts
 * const item = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];
 * 
 * shuffleArray(item);
 * //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]
 * 
 * shuffleArray(item);
 * //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
 * ```
 */
export function shuffleArray<T>(item: readonly T[], prng: PseudoRandomNumberGenerator = Math.random): T[] {
	const itemClone: T[] = [...item];
	const result: T[] = [];
	while (itemClone.length > 0) {
		const n: number = prng();
		if (!(n >= 0 && n < 1)) {
			throw new Error(`Invalid pseudo random number generator! Expect a number which >= 0 and < 1. Current: \`${n}\``);
		}
		const i: number = Math.floor(n * itemClone.length);
		result.push(itemClone[i]);
		itemClone.splice(i, 1);
	}
	return result;
}
export default shuffleArray;
