const dotenv = require('dotenv');

let MyEnviorment={};
if(process.env.NODE_ENV === 'testing'){
    MyEnviorment = dotenv.config({path:`${__dirname}/../Application-Configuration-Test.env`});
}

if(process.env.NODE_ENV === 'development'){
     MyEnviorment = dotenv.config({path:`${__dirname}/../Application-Configuration-Dev.env`});
}

if(process.env.NODE_ENV === 'production'){
     MyEnviorment = dotenv.config({path:`${__dirname}/../Application-Configuration-Prod.env`});
}
