const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')

csvToJsonConverter = (fileName) => {




    const csvFilePath = path.join(__dirname, 'data', fileName)
    const jsonFilePath = path.join(__dirname, 'data', 'customer-data.json')

    jsonString = '[';
    console.log(`Conversion Started`)

    csv()
        .fromFile(csvFilePath)
        .on('json', (jsonObj) => {

            stringToAppend = JSON.stringify(jsonObj)
            jsonString = jsonString + stringToAppend + ','


        })
        .on('done', (error) => {

            if (error) { console.log(`Error: ${error.message}`) }

            jsonString = jsonString.substr(0, jsonString.length - 1) + ']'

            jsonObj =JSON.parse(jsonString)
            
            beautyJsonString = JSON.stringify(jsonObj, null, 4)

            fs.writeFileSync(jsonFilePath, beautyJsonString)
            console.log(`Conversion Finished`)

        })


}

csvToJsonConverter('customer-data.csv')