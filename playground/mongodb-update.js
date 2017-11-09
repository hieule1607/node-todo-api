const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID;
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server - Hieu');
  }
  console.log('Connectes to MongoDB server - Hieu');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a04365c2f8352d49c604741')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a0437fc2f8352d49c604809')
  }, {
    $set: {
      name: 'Update by id'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  });

});