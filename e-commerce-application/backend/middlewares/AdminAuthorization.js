const jwt = require('jsonwebtoken');
const SecretKey = process.env.SECRET_KEY;

let AuthorizeAdmin = (req, res, next) => {
    // console.log(req.headers.token);
    // const Token = req.headers.token.split('_');
    //     console.log('Hi I am '+ Token);
    try {
        const Token = req.headers.token;
        console.log(Token);
        const AdminToAuthenticate = jwt.verify(Token, SecretKey);
        if (AdminToAuthenticate) {
            next();
        } else {
            return res.json({
                Message: 'Authentication Failed',
                Data: false,
                Result: null
            })
        }
    } catch (error) {
        res.json({
            Message: error,
            Data: false,
            Result: null
        })
    }
}

module.exports = { AuthorizeAdmin }