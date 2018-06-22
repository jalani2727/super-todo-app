const express = require('express')
const app = express();

const Todo = require('./db');

app.get('/', (req, res) =>{
    Todo.getAll()
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
});


app.get('/:id', (req, res) => {
    Todo.getOne(req.params.id)
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
})

app.listen(3000, () => {
    console.log("Your server is now running on port: 3000");
});

