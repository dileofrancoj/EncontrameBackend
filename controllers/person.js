const Person = require("./../models/Person");
const create = async (req, res) => {
  const person = new Person(req.body);
  person.user = "5fcfceaa097346a23616b4c0"; // id harcodeado
  const result = await person.save();
  res.status(201).json({ ok: true, msg: "Persona dada de alta", result });
};
const all = (req, res) => {};

module.exports = { create, all };
