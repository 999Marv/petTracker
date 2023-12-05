const create = (req, res) => {
  const {
    Pets,
    body: { name, url, species, friendly },
  } = req;

  res.send('hi');
  console.log(Pets, name, url, species, friendly);
};

module.exports = create;
