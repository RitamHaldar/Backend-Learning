require("dotenv").config();
const app = require("./src/app");
const ConnecttoDB= require("./src/config/Database");
ConnecttoDB();
app.listen(3000,()=>{
    console.log("Server running at port 3000");
})