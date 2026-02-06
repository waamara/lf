const express  = require("express"); 

const app = express();   

app.get("/", (req, res)  => {
    res.send ("LF aapi is runnig "); 
}); 

const  PORT =  5000 ;  
app.listen(PORT,  () =>  {
    console.log('server is running on port 5000'); 
});
