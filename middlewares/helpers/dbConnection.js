const mongoose = require("mongoose");
const Fawn = require("fawn");

module.exports = () => {
    const self = module.exports;
    mongoose 
        .connect(process.env.MONGO_URI)
}