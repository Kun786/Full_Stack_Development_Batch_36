const ProductModel = require('../models/ProductManagementModel')

const ProductData = async (req, res) => {
    try {
        const { productName, quantity, price, description, color, companyName, category, size, productMaterial } =req.body;
        let ImageDetaisl = [];
        let Size = size.split(',');
        req.files.forEach(arrayObject => {
            const { filename, originalname, mimetype } = arrayObject;
            ImageDetaisl.push({
                ImageUrl:`assets/Product/${productName}/${filename}`, 
                ImageName:originalname, 
                ImageMimeType:mimetype
            });
        })
        const docToCreate = new ProductModel({
            productName, quantity, price, description, color, companyName, category, size:Size, productMaterial , 
            imageDetaisl:ImageDetaisl
        })

        const docToSave = await docToCreate.save();
        res.json({
            Message:'Data Saved Successfuly',
            Body:docToSave,
            Data:true
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}

const GetProductData = async (req, res) => {
    try {
        // const DocToGet = await ProductModel.findOne(
        //     { Status: 0 }, //Condition
        //     { ProductPrice: 0 } //Projecttion
        //     //Options
        // );
        const docToGet = await ProductModel.find();
        res.json({
            Message: 'All Documents Found',
            Data: true,
            Result: docToGet
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}

const UpdateMyProductData = async (req, res) => {
    try {
        const DocToUpdate = await ProductModel.updateOne(
            { _id: '62d82a88c8127365f2143754' },//Kahan Kis ko
            { ProductPrice: 12099182 }//Kon c Vlaue
        )
        res.json({
            Message: 'Documents has benn Updated',
            Data: true,
            Result: DocToUpdate
        })
    } catch (error) {

    }
}

const DeleteProductData = async (req, res) => {
    try {
        const DocToDelete = await ProductModel.deleteMany({ Status: 1 });
        res.json({
            Message: 'Documents has benn Updated',
            Data: true,
            Result: DocToDelete
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}
module.exports = {
    ProductData,
    GetProductData,
    UpdateMyProductData,
    DeleteProductData
}