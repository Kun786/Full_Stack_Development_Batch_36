const AdminModel = require('../models/AdminManagementModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const MyKey = process.env.SECRET_KEY;

const AdminRegister = async (req, res) => {
    try {
        const { FirstName, LastName, Email, Password } = req.body;
        const _GetAdminUserLength = await AdminModel.find();
        if (_GetAdminUserLength.length >= 1) {
            res.json({
                Message: `Admin Regesteration is Constraint`,
                Status: null,
                Data: false
            })
        } else {
            const _RegisterAdmin = new AdminModel({
                FirstName,
                LastName,
                Email,
                Password
            });
            await _RegisterAdmin.save();
            res.json({
                Message: `User Register Successfully`,
                Data: true,
                Result: _RegisterAdmin
            })
        }
    } catch (error) {
        console.log(error);
        res.json({ Message: error.message, Result: false });
    }
}

const AdminLogin = async (req, res) => {
    try {
        _Email = req.body.Email;
        _Password = req.body.Password;
        let _AdminToAuthenticate = await AdminModel.findOne({ Email: _Email });
        if (_AdminToAuthenticate === null) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or Email',
                Result: null,
                Data: false
            })
        }

        const _Result = await bcrypt.compare(_Password, _AdminToAuthenticate.Password);
        if (!_Result) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or Email',
                Data: false,
                Result: null
            })
        }

        const _Token = jwt.sign(
            {
                SaltString: _AdminToAuthenticate.SaltString
            },
            MyKey,
            { expiresIn: '15m' }
        )

        return res.json({
            Message: 'Authentication SuccessFull',
            Data: true,
            Token: _Token,
            Result: _AdminToAuthenticate
        })
    } catch (error) {
        res.json({
            Error: error.message,
            Data: false,
            Result: null
        })
    }
}

module.exports = {
    AdminRegister,
    AdminLogin
};