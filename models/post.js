const mongoose = require('mongoose'); 

const postShema  = new mongoose.Shema ({
    tittle : { 
        type : String ,  
        required  : true , 
        trim :  true ,  

    }, 

    description  : {
        type : String ,  
        required, 
    }, 

    location :{
        type : String , 
        required : true , 
    } 

    Type : {
        type : String ,  
        enum : ['Lost'  , 'Found'], 
        required : true  , 

    }
})