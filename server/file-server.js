const express = require('express');
const db = require('./db');

const app = express();
const port = 3001;

//Adding body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

//Connect to Database
db.sync().then(()=>{
    console.log(`Connected to Database successfully.`);
  })
 .catch((error)=>{
    console.error('Unable to connect to Database', error);
 });


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
});