// load Joi module
const Joi = require("joi");

const schema = Joi.object({
  userId: Joi.string().guid({
    version: "uuidv4",
  }),
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  phoneNumber: Joi.string().pattern(new RegExp("^[0-9]+$")).required(),
});
