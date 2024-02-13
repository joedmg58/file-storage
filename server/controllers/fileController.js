const File = require('../models/fileModel');

module.exports = {

    listDir: function(req, res) {
        console.log(req.params);
        const parentDir = req.params.dir || null;

        File.findAll({
            where: {
                parentDir: parentDir
            }
        })
        .then(files => res.status(200).json({code: 200, message: `Directory listing from ${parentDir || 'Root'}`, data: files}))
        .catch(error => res.status(500).json({code: 500, message: error.message}));
    },
    
}