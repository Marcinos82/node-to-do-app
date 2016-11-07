const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
    }
    console.log('Conected to Mongodb server');


    db.close();
});
