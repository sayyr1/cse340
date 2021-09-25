const express = require('express');

const path = require('path')

const app = express();

const adminRoutes = require('./routes/route')

// Calling the routes

app.use(express.static(path.join(__dirname, 'public')));
app.use(adminRoutes)

app.use((req, res, next) =>{
    res.status(404).send('<h1>Page not found</h1>')
} )


app.listen(3000);

