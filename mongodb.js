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

//     db.collection('users').insertMany([{
//         name:'harvey',
//         age:34
//     },{
// name:'mike',
// age:69
//     }],(error,result)=>{
// if (error) {

//     return console.log('unable to insert user');
    
// }

// console.log(result.ops);
//     })



    db.collection('tasks').insertMany(
      [
        {
          description: 'NodeJS',
          completed: false,
        },
        {
          description: 'Redux',
          completed: false,
        },
        {
          description: 'Angular',
          completed: true,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('unable to insert user');
        }

        console.log(result.ops);
      }
    );


  }
);