import getCurrencySymbol from './getCurrencySymbol';

test('getCurrencySymbol ILS to be ₪', () => {
  expect(getCurrencySymbol('ILS')).toBe('₪');
});

test('getCurrencySymbol USD to be $', () => {
  expect(getCurrencySymbol('USD')).toBe('$');
});

test('getCurrencySymbol EUR to be €', () => {
  expect(getCurrencySymbol('EUR')).toBe('€');
});

test('getCurrencySymbol GBP to be £', () => {
  expect(getCurrencySymbol('GBP')).toBe('£');
});
