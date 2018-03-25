/**
 * Returns an array of items from `start` to `end` (non-inclusive for `end),
 * incremented by `step`.
 * @param {number} start
 * @param {number} end
 * @param {number} [step=1]
 *
 * @example
 * range(1, 5) // [1, 2, 3, 4, 5]
 * range(1, 5, 2) // [1, 3, 6]
 */
export default function range(start, end, step = 1) {
  return Array(Math.ceil((end - start) / step))
    .fill(start)
    .map((x, y) => x + y * step)
}
