const Joi = require("@hapi/joi");
const schemas = {
  create: Joi.object().keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(12),
    telephone: Joi.string().required(),
  }),
};

module.exports = { schemas };
