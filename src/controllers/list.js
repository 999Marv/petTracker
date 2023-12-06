const list = async (req, res) => {
  const pets = await req.Pets.list();
  res.send(pets);
};

module.exports = list;
