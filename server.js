const express  = require("express"); 
const connectDB = require("./config/db.js"); 
const dotenv = require("dotenv");

dotenv.config(); 
connectDB();  



const app = express();   

app.get("/", (req, res)  => {
    res.send ("LF api is runnig "); 
}); 

const  PORT =  5000 ;  
app.listen(PORT,  () =>  {
    console.log('server is running on port 5000'); 
});
