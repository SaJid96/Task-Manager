const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to the Database');
    }

    const db = client.db(databseName);

    // db.collection('tasks').findOne(
    //   { _id: new ObjectID('62363a46e7cd2eb7834c8502') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection('tasks').find({completed:false}).toArray((error,users)=>{

    //     console.log(users);
    // })

    // db.collection('tasks')
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )

    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // db.collection('users')
    //   .deleteMany(
       
    //     {
    //      age:48
    //     }
    //   )

    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

     db.collection('tasks')
       .deleteOne({
        description : "Angular",
       })

       .then((result) => {
         console.log(result);
       })
       .catch((error) => {
         console.log(error);
       });
  }
);
