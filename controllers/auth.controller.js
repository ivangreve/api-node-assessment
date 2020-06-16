const express = require('express');
const router = express.Router();
const clientService = require('../services/clients.service');
const authorize = require('helpers/authorize')
const Role = require('helpers/role');

// routes
router.post('/authenticate', authenticate); // public route


//Authentication only Email
function authenticate(req, res, next) {
    clientService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(401).json({ message: 'Email is incorrect' }))
        .catch(err => next(err));
}


module.exports = router;
