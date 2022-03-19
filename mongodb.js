const mongodb= require('mongodb')

const MongoClient=mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017';
const databseName='task-manager'

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to the Database');
    }

    const db=client.db(databseName)

    db.collection('users').insertOne({
        name:'sajid',
        age:24
    })

  }
);