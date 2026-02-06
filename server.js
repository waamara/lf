const express= require("express"); 

const app = express();   

app.get("/", (req, res)  => {
    res.send ("LLF aapi is runnig "); 
} ); 

const  PORT =  5000 ;  

