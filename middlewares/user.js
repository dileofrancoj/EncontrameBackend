const { schemas } = require("./../schemas/user");

const validateCreate = (req, res, next) => {
  const { error, value } = schemas.create.validate(req.body);
  error
    ? res.status(422).json({ ok: false, err: error.details[0].message })
    : next();
};

module.exports = { validateCreate };
