const remove = async (req, res) => {
  const {
    Pets,
    params: { id },
  } = req;

  const result = await Pets.remove(Number(id));
  res.sendStatus(result ? 204 : 404);
};

module.exports = remove;
