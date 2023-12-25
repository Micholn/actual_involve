const Jimp = require('jimp');
module.exports = async (req, res, next) => {
    if (!req.files.length) {
        return next()
    }
    const options = {
        ration: 0.6,
        
    }
}