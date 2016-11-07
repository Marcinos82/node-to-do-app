var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

newTodo = new Todo({
  text: 'Dzień dobry bardzo!',
  completed: false
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save todo');
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

newUser = new User({email: 'mszczepkowski@wp.pl'});

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc));
}, (e) => {
  console.log('Something went wrong');
});
