const stripe = require('stripe')(`${process.env.STRIPE_DEVELOPMENT_KEY}`);

const PayWithStripe = async (req, res) => {
    try {
        // const { FirstName, LastName, Country, StreetName, StateProvince, City, Zip, Amount, Token } = req.body;
        // const CustomerInformation = await stripe.customers.create({
        //     name: FirstName,
        //     source: Token
        // });
        // const PaymentInformation = await stripe.charges.create({
        //     amount: Amount * 100,
        //     currency: 'USD',
        //     description: 'Student Payment',
        //     customer:CustomerInformation.id
        // });
        // res.json({
        //     Message: 'Your Payment Has Approved',
        //     Data: true,
        //     Result: PaymentInformation.status,
        //     PaymentMethod:PaymentInformation.payment_method_details.card.brand,
        //     StudentCountry:PaymentInformation.payment_method_details.card.country,
        //     TransactionNetwrok:PaymentInformation.payment_method_details.card.network,
        //     PaymentBy:PaymentInformation.payment_method_details.type,
        //     CustomerId:CustomerInformation.id,
        //     Receipt_Url:PaymentInformation.receipt_url,
        //     CustomerName:CustomerInformation.name,
        // })
        const  product  = req.body;

        // let ResponseFroJazCash = await axios.post(req.body,wwww.jazcash.com/make-a-payment);
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product.Name,
                        },
                        unit_amount: product.Amount * 100,
                    },
                    quantity: product.Quantity,
                },
            ],
            mode: "payment",
            success_url: `http://rad-study-final-production.herokuapp.com/subscription/confirmation`,
            cancel_url: `http://rad-study-final-production.herokuapp.com/home`,
        });
        res.json({ 
            id: session.id,
            Data:true,
            Result:'succeeded'
         });
    } catch (error) {
        console.log(error);
        res.json({
            Message: error.message,
            Data: false,
            Result: false
        })
    }
}


module.exports = { PayWithStripe }
