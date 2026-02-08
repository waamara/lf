const express  = require("express"); 
const connectDB = require("./config/db.js"); 
const dotenv = require("dotenv");
const postRoutes = require("./routes/PostRoutes");

dotenv.config(); 
connectDB();  
const app = express();   
app.use(express.json());




app.get("/", (req, res)  => {
    res.send ("LF api is runnig "); 
}); 


app.use("/api/posts", postRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT,  () =>  {
    console.log('server is running on port 5000'); 
});
