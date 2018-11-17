const users = ({ User }) => (req, res, next) => {
    User.find()
        .select('id name email avatar')
        .then(data => {
            return res.status(200).json({ status: "success", data })
        })
};

module.exports = users;