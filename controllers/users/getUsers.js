const getUsers = ({ User }) => (req, res, next) => {
    User.find()
        .select('name email avatar')
        .then(data => {

            console.log("data", data);

            return res.status(400).json(data)
        })
};

module.exports = getUsers;