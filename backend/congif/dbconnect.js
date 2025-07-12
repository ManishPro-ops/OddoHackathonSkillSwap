const mongoose = require("mongoose");

async function dbconnect() {
    
    try {
        
        const temp = await mongoose.connect(process.env.MONGO_URL);

        console.log("db connected");

    } catch (error) {
        
        console.error(error);

        console.log("connot connect to db ");

    }

}

module.exports = dbconnect;