const Package = require('../package.json');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (error,connection) => {
    if (!error) {
        console.log(`\nMogoDb Connected Successfuly at MongoAtlas with Database Name E-Commerce\n`);
        console.log("Your App Has the Following Dependicies\n");
        for (let dependencies in Package.dependencies) {
            console.log(dependencies);
        }
    }
    else { console.log('Error: Not Connected to the MongoDb' + error) }
});

// mongodb+srv://lms1:lms1@clusterlms.1xyuk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority