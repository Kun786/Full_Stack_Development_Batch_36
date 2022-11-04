//Dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const SaltRounds = process.env.SALT_ROUND;
const SaltRounds = parseInt(process.env.SALT_ROUND);

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();

//Start Block Schema Creating
const AdminRegisterSchema = mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    SaltString: { type: String },
    Status: { type: Number, default: 1 },
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
}, { timestamps: true })


AdminRegisterSchema.pre('save', async function (next) {
    try {
        const Salt = await bcrypt.genSalt(SaltRounds);
        const HashedPassword = await bcrypt.hash(this.Password, Salt);
        this.Password = HashedPassword;
        this.SaltString = Salt;
        next();
    } catch (error) {
        return (
            {
                Message: error.message,
                Data: false,
                Result: null
            }
        )
    }
});


//End Block Schema Creating

//Exporting The Schema
module.exports = mongoose.model('AdminRegisterCollection', AdminRegisterSchema);