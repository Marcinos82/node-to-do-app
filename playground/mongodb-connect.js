const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
    }
    console.log('Conected to Mongodb server');
      // db.collection('Todos').insertOne({
      //   text: 'Something to do',
      //   compleated: false
      // }, (err, result) => {
      //   if (err) {
      //     return console.log('Unable to insert todo', err);
      //   }
      //   console.log(JSON.stringify(result.ops, undefined, 2));
      // });

      db.collection('Users').insertOne({
        name: 'Maricn',
        age: 34,
        location: "Olsztyn"
      }, (err, result) => {

        if (err) {
          return console.log('Unable to insert users data.', err);

        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      });

    db.close();
});
