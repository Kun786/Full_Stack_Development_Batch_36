//Dependencies
const mongoose = require('mongoose');

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();


//Start Block Schema Creating
const ProductSchema = mongoose.Schema({
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    companyName: { type: String, required: true },
    color:{ type:String, required:true },
    size:[],
    description:{ type:String, required:true },
    status: { type: Number, default: 1 },
    category: { type:String, required:true},
    imageDetaisl: [
        {
            ImageUrl: { type: String },
            ImageName: { type: String },
            ImageMimeType: { type: String },
        }
    ],
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
}, { timeStamp: true })


//Exporting The Schema
module.exports = mongoose.model('ProductCollection', ProductSchema);