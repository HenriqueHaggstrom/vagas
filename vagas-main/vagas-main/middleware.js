const checkPermissions = (req, res, next) => {
    const { user } = req;
    const { permissions } = user;


    if (!permissions.includes(req.permission)) {
        return res.status(403).send("Permissão negada");
    }

    next();
};

module.exports = {
    checkPermissions
};