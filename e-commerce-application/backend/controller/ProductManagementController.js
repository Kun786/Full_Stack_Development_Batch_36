
const ProductData = (req, res) => {
    try {
        console.log(req.body);
        //Hey Please Save this Data to My DataBase //IOBlocking await
        res.json({
            Message:'You Have Reached the Api End Point',
            Body:req.body
        })
    } catch (error) {
        res.json({
            Message:error.mesage,
            Body:null
        })
    }
}

const GetProductData = (req, res) => {

}

module.exports = {
    ProductData,
    GetProductData
}