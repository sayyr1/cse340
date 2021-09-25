const express = require('express');

const bodyParser = require('body-parser');

const expressHbs = require('express-handlebars');

const app = express();

const users = []

app.engine('hbs', expressHbs({defaultLayout:'main-layout', extname:'hbs'}))
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended:false }));

// Router for the home
app.get('/', (req, res, next)=> {
    res.render('index', {pageTitle: 'Add User'});
})

// Router for the list of the users. 
app.get('/users', (req, res, next) => {
    res.render('user', { pageTitle: 'Users', users: users, hasUsers:users.length > 0 });
})

// Route for creating the users
app.post('/add-user', (req, res, next) => {
    users.push({name: req.body.username});
    res.redirect('/users');
});

app.use((req, res, next) => {
    res.status(404).send('<h1>page not Found</h1>')
})

app.listen(3000);
