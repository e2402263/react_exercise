import { expect, test } from 'vitest';
import { calculateTotal } from './cartLogic';

test('calculates the sum of normal prices', () => {
  const prices = [10.00, 5.00];
  expect(calculateTotal(prices)).toBe(15.00); // 15€, no discount
});

test('applies a 10% discount if sum is over 20€', () => {
  const prices = [15.00, 10.00]; // Sum is 25€
  expect(calculateTotal(prices)).toBe(22.50); // 25€ - 10% = 22.50€
});

test('returns 0 for an empty cart', () => {
  expect(calculateTotal([])).toBe(0);
});