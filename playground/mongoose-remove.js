const {MongoClient} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {ObjectId} = require('mongodb');

const {Todo} = require('./../server/models/todo')
var {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({_id: '582c32d02b974a1af080977a'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('582c32d02b974a1af080977a').then((todo) => {
  console.log(todo);
})
