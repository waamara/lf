const express = require(express);  
const Post = require("/models/post.js"); 

const router = express.Router();


// creat a post 
router.post("/",  async  (req,res) => {
    try{
        const post =  awaiit  Post.create(req.body);
        
    }
    catch(error) {

    }a
});
