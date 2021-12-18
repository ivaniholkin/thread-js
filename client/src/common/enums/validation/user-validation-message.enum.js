import { UserValidationRule } from './user-validation-rule.enum';

const UserValidationMessage = {
  USERNAME_REQUIRE: 'Username is required',
  USERNAME_MIN_LENGTH: `Username must be at least ${UserValidationRule.FIRST_NAME_MIN_LENGTH} characters long`,
  USERNAME_MAX_LENGTH: `Username must be at most ${UserValidationRule.FIRST_NAME_MAX_LENGTH} characters long`,
  EMAIL_REQUIRE: 'Email is required',
  EMAIL_WRONG: 'Email is wrong',
  PASSWORD_REQUIRE: 'Password is required',
  PASSWORD_MIN_LENGTH: `Password must be at least ${UserValidationRule.PASSWORD_MIN_LENGTH} characters long`,
  PASSWORD_MAX_LENGTH: `Password must be at most ${UserValidationRule.PASSWORD_MAX_LENGTH} characters long`
};

export { UserValidationMessage };
