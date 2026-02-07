const express = require(express);  
const Post = require("/models/post.js"); 

const router = express.Router();


// creat a post 
router.post("/",  async  (req,res) => {
    try{
        const post =  await  Post.create(req.body);
        res.status(201).json(post);
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
});


// gget all postts 
