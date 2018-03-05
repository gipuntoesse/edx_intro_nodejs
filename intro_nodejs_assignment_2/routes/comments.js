let data = require('../data/storage')

module.exports = {
    getComments(req, res) {
        if (data.posts[req.params.postId] === undefined) return res.status(200).send("Post not found")
        let comments = data.posts[req.params.postId].comments
        res.status(200).send(comments)
    },
    addComment(req, res) {
        let newComment = req.body
        if (data.posts[req.params.postId] === undefined) return res.status(200).send("Post not found")
        if (!newComment) return res.status(400).send("No comment added")

        data.posts[req.params.postId].comments.push(newComment)
        let id = data.posts[req.params.postId].comments.length - 1
        res.status(200).send({ id: id })
    },
    updateComment(req, res) {
        if (data.posts[req.params.postId] === undefined) return res.status(200).send("Post not found")
        if (data.posts[req.params.postId].comments[req.params.commentId] === undefined)
            return res.status(200).send("Comment not found")
        data.posts[req.params.postId].comments[req.params.commentId] = req.body

        res.status(200).send(data.posts[req.params.postId].comments[req.params.commentId])
    },
    removeComment(req, res) {
        if (data.posts[req.params.postId] === undefined) return res.status(200).send("Post not found")
        if (data.posts[req.params.postId].comments[req.params.commentId] === undefined)
            return res.status(200).send("Comment not found")

        data.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.status(200).send()
    }
}






