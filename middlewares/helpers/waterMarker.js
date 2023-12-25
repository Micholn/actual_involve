const Jimp = require('jimp');
module.exports = async (req, res, next) => {
    if (!req.files.length) {
        return next()
    }
    const options = {
        ratio: 0.6,
        opacity: 0.4,
         
    }
}