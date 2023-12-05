const create = async (req, res) => {
  const {
    Pets,
    body: { name, url, species, friendly },
  } = req;

  const newPet = await Pets.create(name, url, species, friendly);
  newPet
    ? res.status(201).send(newPet)
    : res.status(500).send({ err: "Can't create" });
};

module.exports = create;
