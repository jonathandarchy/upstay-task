const logErrors = (err, req, res, next) => {
    console.error('Error:',err);
};

module.exports = { logErrors };
