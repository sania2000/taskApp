const { result } = require('lodash')
const {MongoClient, ObjectId} = require('mongodb')
const conectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(conectionURL, { useNewUrlParser:true}, (error, client) => {
    if (error){
        return console.log('Connection failed')
    }
    console.log('Connected')

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        name: 'task2'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})

        