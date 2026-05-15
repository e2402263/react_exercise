export const calculateTotal = (prices: number[]) => {
  const sum = prices.reduce((total, price) => total + price, 0);
  if (sum > 20) {
    return sum * 0.9; // 10% discount
  }
  return sum;
};