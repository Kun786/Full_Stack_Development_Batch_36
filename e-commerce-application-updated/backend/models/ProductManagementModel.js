//Dependencies
const mongoose = require('mongoose');

// Date
const today = new Date(); //date class
const day = today.getDate(); //day
const month = today.getMonth() + 1; //month
const year = today.getFullYear(); //year
const time = today.getTime(); //time 


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
}, { timestamps: true })


//Exporting The Schema
module.exports = mongoose.model('ProductCollection', ProductSchema);