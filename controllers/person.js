const Person = require("./../models/Person");
const create = async (req, res) => {
  try {
    const person = new Person(req.body);
    person.user = "5fcfceaa097346a23616b4c0"; // id harcodeado
    const data = await person.save();
    res.status(201).json({ ok: true, msg: "Persona dada de alta", data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};
const all = async (_, res) => {
  try {
    const data = await find();
    res.json({ ok: true, data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await find(id);
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const find = async (id = null) => {
  console.log(id);
  const requiredData = ["name", "lastname", "phone"];
  if (id) return await Person.findById(id).populate("user", requiredData);
  return await Person.find().populate("user", requiredData);
};
module.exports = { create, all, single };
