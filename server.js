const express  = require("express"); 
const connectDB = require("./config/db.js"); 
const dotenv = require("dotenv");
const postRoues = require("./routes/postRoutes.js");

dotenv.config(); 
connectDB();  

app.use(express.json());


const app = express();   

app.get("/", (req, res)  => {
    res.send ("LF api is runnig "); 
}); 


app.use("/api/posts", postRoues);
const  PORT =  5000 ;  
app.listen(PORT,  () =>  {
    console.log('server is running on port 5000'); 
});
