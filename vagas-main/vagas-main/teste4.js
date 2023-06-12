var data = require("./fakeData");
const { checkPermissions } = require("./middleware");

module.exports = function(req, res) {
  var name = "João Oliveira";

  const user = data.find(user => user.name === name);
  if (user) {
    user.name = req.body.name;
    user.job = req.body.job;
    res.send(user);
  } else {
    res.status(404).send("Usuario não encontrado");
  }
};