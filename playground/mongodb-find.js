const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID;
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server - Hieu');
  }
  console.log('Connectes to MongoDB server - Hieu');

  // find({completed:true})
  // db.collection('Todos').find({
  //   _id: new ObjectID('5a0332a8ed39c90e07c046dc')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('unable to fetch todos', err);
  // })

  // db.collection('Todos').find({}).count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Hieu Le'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  });

  // db.close();
});