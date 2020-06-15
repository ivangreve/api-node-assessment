const express = require('express');
const router = express.Router();
const clientService = require('./clients.service');
const authorize = require('helpers/authorize')
const Role = require('helpers/role');

// routes
router.get('/', authorize(Role.Admin), getAll); // admin only
router.get('/:id', authorize(), getById);       // Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"

module.exports = router;

function getAll(req, res, next) {
    clientService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    const currentUser = req.user;
    const id = req.params.id;
    
    // only allow admins to access other user records
    if (id !== currentUser.id && currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    clientService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}


