const data = require("./fakeData");

const getUser = (req, res, next) => {
    const name = req.query.name;

    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            res.send(data[i]);
            return;
        }
    }

    next(new Error("Usuario não encontrado"));
};

const getUsers = (req, res, next) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};