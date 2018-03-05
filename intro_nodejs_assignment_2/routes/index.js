const comments = require('./comments.js')
const posts = require('./posts.js')



exports.postsGet = function (req, res) {

    posts.getPosts(req, res)
}


exports.postsPost = function (req, res) {
    posts.addPost(req, res)
}

exports.postsPut = function (req, res) {
    posts.updatePost(req, res)
}
exports.postsDelete = function (req, res) {
    posts.removePost(req, res)
}

exports.commentsGet = function (req, res) {
    comments.getComments(req, res)
}

exports.commentsPost = function (req, res) {
    comments.addComment(req, res)
}
exports.commentsPut = function (req, res) {
    comments.updateComment(req, res)
}
exports.commentsDelete = function (req, res) {
    comments.removeComment(req, res)
}




