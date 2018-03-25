import isEven from './is-even'

it('correctly judges evenness', () => {
  expect(isEven(1)).toBe(false)
  expect(isEven(2)).toBe(true)
  expect(isEven(3)).toBe(false)
  expect(isEven(4)).toBe(true)
})
