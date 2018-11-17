module.exports = setAllowHeader = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONT_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
};