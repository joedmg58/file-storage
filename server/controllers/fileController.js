const File = require('../models/fileModel');
const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');

const rootDir = path.normalize(process.env.ROOT_DIR);

module.exports = {

    listDir: function(req, res) {
        const parentDir =  req.params.dir || '/';

        File.findAll({
            where: {
                parentDir: parentDir
            }
        })
        .then(files => res.status(200).json({code: 200, message: `Directory listing from ${parentDir}`, data: files}))
        .catch(error => res.status(500).json({code: 500, message: error.message}));
    },
    
    createDir: function(req, res) {
        const dirName = req.body.name;
        const parentDir = '/' + req.params.dir //|| '/';

        const dir = path.normalize(path.join(path.join(rootDir, parentDir),dirName));

        try {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);

                File.create({
                    //id: uuid(),
                    name: dirName,
                    date: new Date(),
                    type: 1, //directory
                    parentDir: parentDir
                })
                .then(file => { 
                    res.status(200).json({code: 200, dir: path.join(parentDir, dirName), message: `Directory created successfully`});
                })
                .catch(error => { 
                    res.status(500).json({code:500, message: error.message, msg:'Catch error from File.create()'}) ;
                });

            } else {
                res.status(403).json({code:403, message: `Directory ${path.join(parentDir, dirName)} already exist.`});
            }

        } catch (error) {
            res.status(500).json({code:500, message: error});
        }

    }
}