
const {MongoClient,ObjectID} =require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databseName='task-manager'

const id=new ObjectID()
console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to the Database');
    }

    const db=client.db(databseName)

    db.collection('users').insertOne(
    
        {
          _id: id,
          name: 'pam',
          age: 48,
        },
        
      
      (error, result) => {
        if (error) {
          return console.log('unable to insert user');
        }

        console.log(result.ops);
      }
    );



    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'NodeJS',
    //       completed: false,
    //     },
    //     {
    //       description: 'Redux',
    //       completed: false,
    //     },
    //     {
    //       description: 'Angular',
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );


  }
);