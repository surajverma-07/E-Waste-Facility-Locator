const { config } = require("dotenv");
const mongoose = require("mongoose");

const dbConnect = () => {
    const ConnectionString = "mongodb+srv://vermapalak161104:fRvuk8lsB0MHlRbE@cluster0.7d1is9y.mongodb.net/e-waste-locator?retryWrites=true&w=majority";
    const DbName = ""

    mongoose
        .connect(ConnectionString, { dbName: DbName })
        .then((c) => {
            console.log("DataBase Connected Succesfully");
        })
        .catch((c) => {
            console.log(c);
            console.log("Database not Connected ");
        });
};

module.exports = dbConnect;