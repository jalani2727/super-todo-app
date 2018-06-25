const express = require('express')
const app = express();

const Todo = require('./db');

const expressHbs = require('express-handlebars');

// so that you can insert html with handlebars
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');




app.get('/', (req, res) =>{
    Todo.getAll()
        .then((data) => {
            console.log(data);
            res.render('homepage', {
                todos: data
            });
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

