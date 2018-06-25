const express = require('express')
const app = express();

const Todo = require('./db');

const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const expressHbs = require('express-handlebars');

// so that you can insert html with handlebars
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

const static = express.static;
app.use(static('public'));





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

app.post('/new', (req, res) => {
    
    // res.send('Hey, you submitted the form');
    Todo.add(req.body.title)
        .then((data) =>{
            res.redirect(`/${data.id}`)
        })
});

app.post('/:id', (req, res) => {
    
    Todo.setTitle(req.params.id, req.body.title)
        .then((data) => {
            res.redirect(`/${req.params.id}`);
        })
        .catch((error) => {
            console.log(error);
        });
});


app.get('/new', (req, res) => {
    res.render('todo-create-page');
    
});

app.get('/:id', (req, res) => {
    Todo.getOne(req.params.id)
        .then((data) => {
            console.log(data);
            res.render('todo-detail-page', data);
        })
        .catch((error) => {
            console.log(error);
        });
});





app.listen(3000, () => {
    console.log("Your server is now running on port: 3000");
});

