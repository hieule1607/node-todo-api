const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5a047fa2a92e2a0e51991677';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo)
// });

// Todo.findById(id) .then((todo) => {
//   if(!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by Id', todo)
// }).catch((e) => console.log(e));

User.findById('5a0444fcc3f411081427509d').then((user) => {
  if(!user) {
    return console.log('Unable to find user')
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e)
})