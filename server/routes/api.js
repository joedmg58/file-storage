const express = require('express');
const apiRouter = express.Router();
const fileController = require('../controllers/fileController');

const defaultResponse = (req, res) => {
    res.status(200).json({code: 200, message: `Working on this route: /api${req.route.path}`});
}

apiRouter
    .route('/version')
    .get( (req, res) => {
        res.status(200).json({code: 200, version: '1.0', message: 'File Server Version 1.0'});
    });

apiRouter   
    .route('/file')
    .get( defaultResponse )      //get file's properties
    .delete( defaultResponse )   //delete file

apiRouter   
    .route('/file/download')
    .get( defaultResponse )      //download file
    
apiRouter
    .route('/file/upload')
    .post( defaultResponse )     //upload file

apiRouter
    .route('/file/dir/:dir(*)?')     // ? means the parameter is optional
    .get( fileController.listDir )      //get dir listing

apiRouter
    .route('/file/dir')
    .post( defaultResponse )     //create a directory
    .put( defaultResponse )      //change directory's name
    .delete( defaultResponse )    //delete a directory

module.exports = apiRouter;