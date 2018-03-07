const mongodb = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'
const customerData = require('./data/m3-customer-data.json')
const customerAddressData = require('./data/m3-customer-address-data.json')
const async = require('async')

let tasks = []
let InsAtATime=process.argv[2]
if(typeof InsAtATime == "undefined") {
    InsAtATime =100
}else{
    InsAtATime = parseInt(process.argv[2])
}

const customersTotal = customerData.length

mongodb.connect(url, (error, database) => {
    if (error) return process.exit(1)
    var myDB = database.db('bitcoin-exchange-database')
    for (let [index, customer] of customerData.entries()) {
        customerData[index] = Object.assign(customer, customerAddressData[index])
        if (((index + 1) % InsAtATime) == 0 || (index + 1) == customersTotal) {
            tasks.push((callback) => {
               
                start = Math.floor(index / InsAtATime) * InsAtATime
                end = index+1
                console.log(`Processing ${start+1}-${end} out of ${customersTotal}`)

                myDB.collection("customers").insert(customerData.slice(start, end), (error, results) => {
                    console.log(`Partial insertion`)
                    callback(null,results)
                })
            })

        }
       
    }

    console.log(`Launching ${tasks.length} parallel task(s)`)

    async.parallel(tasks, (error, results) => {
        
        if (error) console.error(error)
        
        database.close()

        console.log("Insertion finished")
       
    })
})
 