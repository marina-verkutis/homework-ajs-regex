import {Validator} from '../Validator';


describe('Validator tests', () => {
  const validator = new Validator();

  test('Validate username with valid characters and structure', () => {
      const validUsernames = ['username', 'user_name', 'user-name', 'user123_name'];

      validUsernames.forEach(username => {
          expect(validator.validateUsername(username)).toBe(true);
      });

  });

  test('Validate username with invalid characters', () => {
      const invalidUsernames = ['user@name', 'user!name', 'user$name', 'user^name', 'user*name'];

      invalidUsernames.forEach(username => {
          expect(validator.validateUsername(username)).toBe(false);
      });
  });

  test('Validate username with consecutive digits', () => {
      const invalidUsernames = ['user1234', 'user12345', 'user123456'];

      invalidUsernames.forEach(username => {
          expect(validator.validateUsername(username)).toBe(false);
      });
  });

  test('Validate username starting or ending with invalid characters', () => {
      const invalidUsernames = ['_username', '-username', 'username_', 'username-'];

      invalidUsernames.forEach(username => {
          expect(validator.validateUsername(username)).toBe(false);
      });
  });

  test('Validate username starting or ending with digits', () => {
      const invalidUsernames = ['123username', 'username123', '_123username', 'username123_'];

      invalidUsernames.forEach(username => {
          expect(validator.validateUsername(username)).toBe(false);
      });
  });

  test('Validate username with valid characters and invalid structure', () => {
      const invalidUsernames = ['user__', 'user--', 'user__', 'user-_', 'user_-_', 'user-_'];

      invalidUsernames.forEach(username => {
          expect(validator.validateUsername(username)).toBe(false);
      });
  });
});