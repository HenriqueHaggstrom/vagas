var data = require("./fakeData");

module.exports = function (req, res) {
    var name = req.query.name;
    var job = req.query.job;

    var newUser = {
        name: name,
        job: job,
    };

    data.push(newUser);

    res.send(data);
};