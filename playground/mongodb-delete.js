const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID;
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server - Hieu');
  }
  console.log('Connectes to MongoDB server - Hieu');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Use to delete document'}).then((result) => {
  //   console.log(result);
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Document thu 2'}).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(result)
  // });

  // db.collection('Users').deleteMany({name: 'Hieu Le'});

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('5a04365c2f8352d49c604741')
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2))
  // })

});