
const database = require('../database/database.js')
const mongoose = database.mongoose
let accountSchema = mongoose.Schema({
    name: String,
    balance: Number
})
let Account = mongoose.model('Account', accountSchema)

module.exports = {


    getAccounts(req, res) {
        Account.find({}, (error, docs) => {

            res.status(200).send(docs)

        })

    },
    saveAccount(req, res) {
        let reqBody = req.body

        if (!reqBody) return res.status(400).send("No account entered")
        let newAccount = new Account(reqBody)
        newAccount.save((error, doc) => {
            if (error) console.error(error)
            res.status(200).send({ id: doc._id })
        })


    },
    updateAccount(req, res) {
        if (!req.params.id) return res.status(400).send("No id entered")
        Account.findById(req.params.id, {}, (error, doc) => {
            if (!req.body) return res.status(400).send("No data entered")
            if (req.body.name) {
                doc.name = req.body.name
            }
            if (req.body.balance) {
                doc.balance = req.body.balance
            }
            doc.save((error, docAffected) => {
                if (error) console.error(error)
                res.status(200).send(docAffected)
            })
        })



    },
    removeAccount(req, res) {
        if (!req.params.id) return res.status(400).send("No id entered")

        Account.remove({ _id: req.params.id }, (error) => {
            if (error) console.error(error)

            res.status(200).send(`Account with id ${req.params.id} removed`)
        })
    }




}