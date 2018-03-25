import range from './range'

it('correctly generates ranges without a step', () => {
  const ranged = range(1, 5)

  expect(ranged).toHaveLength(4)
  expect(ranged[0]).toBe(1)
  expect(ranged[1]).toBe(2)
  expect(ranged[2]).toBe(3)
  expect(ranged[3]).toBe(4)
})

it('correctly generates ranges with a small step', () => {
  const ranged = range(1, 6, 2)

  expect(ranged).toHaveLength(3)
  expect(ranged[0]).toBe(1)
  expect(ranged[1]).toBe(3)
  expect(ranged[2]).toBe(5)
})

it('correctly generates ranges with a large step', () => {
  const ranged = range(0, 100, 15)

  expect(ranged).toHaveLength(7)
  expect(ranged[0]).toBe(0)
  expect(ranged[1]).toBe(15)
  expect(ranged[2]).toBe(30)
  expect(ranged[3]).toBe(45)
  expect(ranged[4]).toBe(60)
  expect(ranged[5]).toBe(75)
  expect(ranged[6]).toBe(90)
})
