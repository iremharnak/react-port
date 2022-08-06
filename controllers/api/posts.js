const PostModel = require('../../models/Post');

module.exports = {
    index,
    create
}

async function index(req, res) {
    try {
     // 1. Get all Posts from the database
     const posts = await Post.find()
    // 2. Use res.json() to send the posts to the frontend
     res.json(posts);
    } catch(err) {
        res.json(err);
    }
    
}

async function create(req, res) {
    try {
        console.log("Backend working")
      // 1. Create a post in the database (the data will be incoming via `req.body`)
        await PostModel.create({content: req.body.content})
        
     // 2. use res.json() to send a response to the frontend
        res.status(200).json('ok. Post added to DB!')
        console.log("incoming Post data:", req.body)
    } catch(err) {
        console.log(err);
        res.json(err);
    }
}

