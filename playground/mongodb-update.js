const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
    }
    console.log('Conected to Mongodb server');

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("582063d07e10322c6ee98720")
    }, {
      $set: {
        name: 'Marcin'
      },
      $inc: {
        age: +1
      }
    }, {
      returnOriginal: false
    }
  ).then((result)=>{
    console.log(result);
  });

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID("582077967e10322c6ee98721")
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //     returnOriginal: false
    //   }).then((result)=>{
    //   console.log(result);
    // });
    db.close();
});
