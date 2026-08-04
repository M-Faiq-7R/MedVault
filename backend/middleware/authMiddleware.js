function requireLogin(req, res, next) {

    if (!req.session.patientId) {
        return res.status(401).json({
            message: "Please log in first."
        });
    }

    next();
}

module.exports = {
    requireLogin
};