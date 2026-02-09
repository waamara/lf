const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// CREATE a post
router.post("/", async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET all posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a post by id 
router.get("/:id", async(req, res) =>{
    try {

    }
    catch (error) {
        
    }
})

// DELETE a post
router.delete("/:id", async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: "Post deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
