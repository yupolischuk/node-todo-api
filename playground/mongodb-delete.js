// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server'); // return used for asynchronity
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
      console.log(result);
    });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
      console.log(result);
    })

    db.close();
});

