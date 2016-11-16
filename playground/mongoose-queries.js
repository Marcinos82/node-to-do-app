const {MongoClient} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {ObjectId} = require('mongodb');

const {Todo} = require('./../server/models/todo')
var {User} = require('./../server/models/user.js');

var userid = "582101ca338920d0224caad5"
// var id = "58246bd25638eb9826e61b51s";
//
// if (!ObjectId.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(userid).then((user)=>{
  if (!user) {
    return console.log('User not found');
  }
  console.log(user);
}, (e)=>console.log(e));
