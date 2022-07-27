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
    ProductName: { type: String, required: true},
    ProductPrice: { type: Number, required: true},
    Status: { type:Number, default:1 },
    ImageUrl: { type: String },
    ImageName: { type: String },
    ImageMimeType: { type: String },
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
},{timeStamp:true})


//Exporting The Schema
module.exports = mongoose.model('ProductCollection', ProductSchema);