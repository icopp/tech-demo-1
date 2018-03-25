/**
 * Split array `arr` into subarrays of length `len`.
 * @param {any[]} arr
 * @param {number} len
 *
 * @example
 * chunk([1, 2, 3], 1) // [[1], [2], [3]]
 * chunk([1, 2, 3, 4, 5, 6], 2) // [[1, 2], [3, 4], [5, 6]]
 */
export default function chunk(arr, len) {
  return arr
    .map((_, i) => (i % len === 0 ? arr.slice(i, i + len) : null))
    .filter(Boolean)
}
