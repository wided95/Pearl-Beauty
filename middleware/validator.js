const { check, validationResult } = require("express-validator");
exports.registerRules = () => [
  check("name", "name is required").notEmpty(),
  check("email", "email is required").notEmpty(),
  check("email", "email is required").isEmail(),
  check("password", "password is required").isLength({
    min: 6,
    max: 20,
  }),
];

exports.loginRules = () => [
  check("email", "email is required").notEmpty(),
  check("email", "email is required").isEmail(),
  check(
    "password",
    "password must be bettween 6 character ana 20 character"
  ).isLength({
    min: 6,
    max: 20,
  }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .send({ errors: errors.array().map((el) => ({ msg: el.msg })) });
  }
  next();
};
