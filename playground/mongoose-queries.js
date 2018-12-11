const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = 'bff9e0a77fac38726daad38';//5
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
//
// Todo.find({
//     _id: id // Mongoose converts string to object here
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


// ****************************************
var id = '5bfe7ae92d1f314d47783c5e';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User by Id', user);
}).catch((e) => console.log(e));
















