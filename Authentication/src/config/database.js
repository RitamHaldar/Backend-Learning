const mongoose=require("mongoose");
const connecttodb=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to DB");
    })
}
module.exports=connecttodb;