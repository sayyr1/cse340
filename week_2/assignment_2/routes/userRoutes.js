const path = require('path')

const express = require('express');

const dirRoute = require('../util/path')

const route = express.Router();

route.get('/', (req, res, next) => {
    res.sendFile(path.join(dirRoute, 'views', 'create-user.html'))
})
route.use('/users', (req, res, next) => {
    res.sendFile(path.join(dirRoute, 'views', 'users.html'))
})

module.exports = route;
