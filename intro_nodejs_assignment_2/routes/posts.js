
let data = require('../data/storage')

module.exports = {
    getPosts(req, res) {
        res.status(200).send(data.posts)
    },
    addPost(req, res) {

        let newPost = req.body
        if (!newPost) return res.status(400).send("No post added")

        data.posts.push(newPost)
        let id = data.posts.length - 1
        res.status(200).send({ id: id })
    },
    updatePost(req, res) {
        if (data.posts[req.params.postId] === undefined) return res.status(200).send("Post not found")
        data.posts[req.params.postId] = req.body
        res.status(200).send(data.posts[req.params.postId])
    },
    removePost(req, res) {
        if (data.posts[req.params.postId] === undefined) return res.status(200).send("Post not found")
        data.posts.splice(req.params.postId, 1)
        res.status(200).send()
    }
}




















