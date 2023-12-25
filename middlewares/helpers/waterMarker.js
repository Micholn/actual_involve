const Jimp = require('jimp');
module.exports = async (req, res, next) => {
    if (!req.files.length) {
        return
    }
}