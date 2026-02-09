const mongoose = require('mongoose'); 

const postShema  = new mongoose.Schema ({
    tittle : { 
        type : String ,  
        required  : true , 
        trim :  true ,  

    }, 

    description  : {
        type : String ,  
        required : true, 
    }, 

    location :{
        type : String , 
        required : true , 
    },

    Type : {
        type : String ,  
        enum : ['Lost'  , 'Found'], 
        required : true  , 
    },
    },
    
    {
        timestamps : true , 
    },
);

module.exports =  mongoose.model('Post' ,  postShema); 