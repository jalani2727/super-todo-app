const pgp = require('pg-promise')(); 
const cn = { 
    host: 'localhost', 
    port: 5432, 
    database: 'super-todo-app', 
    user: 'Lala', 
    password: '' 

};
const db = pgp(cn);

function getOne(id) {
    return db.oneOrNone('select * from todos where id=$1', [id]);
}

function getAll() {
    return db.any('select * from todos');
}

getAll()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => 
    {console.log(error);
    });


// function getTodo(id) {
//     db.any('select * from todos where id=$1', [id])
//         .then(function(data) {
//             // success;
//             console.log(data);
//         })
//         .catch(function(error) {
//             // error;
//             console.log(error);
//         });
//   }
  
//   getTodo(2);

module.exports = {
    getOne
};