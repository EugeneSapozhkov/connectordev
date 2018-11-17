const me = () => (req, res, next) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        avatar: req.user.avatar,
    });
};

module.exports = me;