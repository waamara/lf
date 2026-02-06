const mongoose = require('mongoose'); 

const postShema  = new mongoose.Shema ({
    tittle : { 
        type : String ,  
        required  : true , 
        trim :  true ,  

    }, 

    description  : {
        
    }
})