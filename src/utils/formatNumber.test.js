import formatNumber from './formatNumber';

describe('formatNumber commas', () => {
  test('formatNumber 100 to be 100', () => {
    expect(formatNumber(100)).toBe('100');
  });

  test('formatNumber 1000 to be 1,000', () => {
    expect(formatNumber(1000)).toBe('1,000');
  });

  test('formatNumber 1000000 to be 1,000,000', () => {
    expect(formatNumber(1000000)).toBe('1,000,000');
  });
});

describe('formatNumber digits after decimal', () => {
  test('formatNumber 100 to be 100', () => {
    expect(formatNumber(100)).toBe('100');
  });
  test('formatNumber 1000.01 to be 1,000.01', () => {
    expect(formatNumber(1000.01)).toBe('1,000.01');
  });

  test('formatNumber 1000.011 to be 1,000.01', () => {
    expect(formatNumber(1000.011)).toBe('1,000.01');
  });
});
