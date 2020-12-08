const User = require("./../models/Users");
const { hash, unhash } = require("./../utils/bcrypt");
const create = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return res.status(400).json({ ok: false, msg: "El correo ya existe" });
  user = new User(req.body);
  user.password = hash(password);
  await user.save();
  res
    .status(201)
    .json({ ok: true, msg: "Usuario creado correctamente", _id: user._id });
};

module.exports = { create };
