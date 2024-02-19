const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config(); 

const app = express();
const port = 3001;

//CORS
app.use(cors());

//Adding body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

//Handling any error on the application, for example database errors
app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});


app.listen(port, ()=>{
    console.info(`File server listening on port ${port}`);

    //Connect to Database
    db.sync().then(()=>{
        console.log(`Connected to Database successfully.`);

        console.info('Root directory: ', process.env.ROOT_DIR);
    })
    .catch((error)=>{
        console.error('Unable to connect to Database', error);
    });

});