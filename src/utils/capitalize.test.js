import capitalize from './capitalize';

describe('capitalize one word', () => {
  test("capitalize 'test' should equal 'Test'", () => {
    expect(capitalize('test')).toBe('Test');
  });
  test("capitalize 'TEST' should equal 'TEST'", () => {
    expect(capitalize('TEST')).toBe('TEST');
  });
});

describe('capitalize two or more words', () => {
  test("capitalize 'test test' should equal 'Test Test'", () => {
    expect(capitalize('test test')).toBe('Test Test');
  });
  test("capitalize 'test TEST' should equal 'Test TEST'", () => {
    expect(capitalize('test TEST')).toBe('Test TEST');
  });
  test("capitalize 'test test test' should equal 'Test Test Test'", () => {
    expect(capitalize('test test test')).toBe('Test Test Test');
  });
});
