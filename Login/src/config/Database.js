const mongoose= require("mongoose");

const ConnecttoDB=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to DB");
    })
}

module.exports= ConnecttoDB;