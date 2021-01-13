import slugify from './slugify';

describe('slufigy whitespace', () => {
  test("slugify 'user profile' should equal 'user-profile'", () => {
    expect(slugify('user profile')).toBe('user-profile');
  });
});
