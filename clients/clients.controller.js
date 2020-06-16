const express = require('express');
const router = express.Router();
const clientService = require('./clients.service');
const policiesService = require('../policies/policies.service');
const authorize = require('helpers/authorize')
const Role = require('helpers/role');

// routes
router.get('/', authorize([Role.Admin]), getAll); // Get all user data => Can be accessed by role "admin"
router.get('/id=:id', authorize([Role.User, Role.Admin]), getById); // Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"
router.get('/name=:name', authorize([Role.User, Role.Admin]), getByName); // Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"
router.get('/policieId=:policieId', authorize([Role.Admin]), getByPolicieId); // Get the user linked to a policy number -> Can be accessed by users with role "admin"

module.exports = router;

function getAll(req, res, next) {
    clientService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    const id = req.params.id;

    clientService.getById(id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getByName(req, res, next) {
    const name = req.params.name;

    clientService.getByName(name)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

async function getByPolicieId(req, res, next) {
    const policieId = req.params.policieId;
    let policie = await policiesService.getById(policieId);

    clientService.getById(policie.clientId)
        .then(clients => res.json(clients))
        .catch(err => next(err));
}
