const User = require("./../models/Users");
const create = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return res.status(400).json({ ok: false, msg: "El correo ya existe" });
  user = new User(req.body);
  user.password = "passwordEncriptada";
  await user.save();
  res.status(201).json({ ok: true, msg: "Usuario creado correctamente" });
};

module.exports = { create };
