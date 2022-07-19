const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9654;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());

//Accquiring My Routes
const _ProductManagementRoute = require('./routes/ProductManagementRoute');
app.use('/ProductManagement',_ProductManagementRoute);
//Accquiring My Routes

app.listen(PORT,() =>{
    console.log(`You Application has Launched from the Port 🚀 🚀 ${PORT}`);
})