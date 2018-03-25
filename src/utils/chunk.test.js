import chunk from './chunk'

it('correctly splits an array into singletons', () => {
  const chunked = chunk([1, 2, 3], 1)
  expect(chunked).toHaveLength(3)
  expect(chunked[0]).toHaveLength(1)
  expect(chunked[0][0]).toBe(1)
  expect(chunked[1]).toHaveLength(1)
  expect(chunked[1][0]).toBe(2)
  expect(chunked[2]).toHaveLength(1)
  expect(chunked[2][0]).toBe(3)
})

it('correctly splits an array into subarrays of length two', () => {
  const chunked = chunk([1, 2, 3, 4, 5, 6], 2)
  expect(chunked).toHaveLength(3)
  expect(chunked[0]).toHaveLength(2)
  expect(chunked[0][0]).toBe(1)
  expect(chunked[0][1]).toBe(2)
  expect(chunked[1]).toHaveLength(2)
  expect(chunked[1][0]).toBe(3)
  expect(chunked[1][1]).toBe(4)
  expect(chunked[2]).toHaveLength(2)
  expect(chunked[2][0]).toBe(5)
  expect(chunked[2][1]).toBe(6)
})

it("correctly handles an array that doesn't match perfectly", () => {
  const chunked = chunk([1, 2, 3, 4, 5, 6, 7], 2)
  expect(chunked).toHaveLength(4)
  expect(chunked[0]).toHaveLength(2)
  expect(chunked[0][0]).toBe(1)
  expect(chunked[0][1]).toBe(2)
  expect(chunked[1]).toHaveLength(2)
  expect(chunked[1][0]).toBe(3)
  expect(chunked[1][1]).toBe(4)
  expect(chunked[2]).toHaveLength(2)
  expect(chunked[2][0]).toBe(5)
  expect(chunked[2][1]).toBe(6)
  expect(chunked[3]).toHaveLength(1)
  expect(chunked[3][0]).toBe(7)
  expect(chunked[3][1]).toBeUndefined()
})
