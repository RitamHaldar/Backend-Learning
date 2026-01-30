const mongoose=require("mongoose")
function connectodb(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected");
    })
}
module.exports=connectodb;