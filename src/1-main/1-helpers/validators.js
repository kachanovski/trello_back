const emailRegExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i;

const emailValidator = (email) => emailRegExp.test(email); // true - valid
const passwordValidator = (password) => password.length > 7; // true - valid

const validateAuth = (req, res) => {
    const isEmailValid = emailValidator(req.body.email);
    const isPassValid = passwordValidator(req.body.password);

    if (!isEmailValid || !isPassValid) {
        res.status(400).json({
            error: "not valid email or password"
        });
        return false;
    } else return true
};

module.exports = validateAuth
module.exports = emailValidator