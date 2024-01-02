const mongoose = require("mongoose");
const Fawn = require("fawn");

module.exports = () => {
    const self = module.exports;
    mongoose 
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => console.log("DB connected"))
        .catch(err => {
            
        })
}