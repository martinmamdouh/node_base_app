const status = require("../libs/status");

const getAll = function(req, res) {
  return res.status(status.HTTP_200_OK).json({ 1: "user1", 2: "user2" });
};

const getUserById = function(req, res) {
  const id = req.params.id;
  if (typeof id != Number) {
    return res
      .status(status.HTTP_400_BAD_REQUEST)
      .json({ error: "Bad Request" });
  }
  return res.status(status.HTTP_200_OK).json({ used_id: id });
};
module.exports.getAll = getAll;
module.exports.getUserById = getUserById;
