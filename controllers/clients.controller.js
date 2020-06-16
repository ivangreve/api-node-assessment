const express = require('express');
const router = express.Router();
const clientService = require('../services/clients.service');
const policiesService = require('../services/policies.service');
const authorize = require('helpers/authorize')
const Role = require('helpers/role');

// Routes
router.get('/', authorize([Role.Admin]), getAll); // Additional Service => Only Admin
router.get('/clientById/:id', authorize([Role.User, Role.Admin]), getById); // Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"
router.get('/clientByName/:name', authorize([Role.User, Role.Admin]), getByName); // Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"
router.get('/clientByPolicieId/:policieId', authorize([Role.Admin]), getByPolicieId); // Get the user linked to a policy number -> Can be accessed by users with role "admin"

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

    if(policie.lenght)
    return;

    clientService.getById(policie.clientId)
        .then(clients => res.json(clients))
        .catch(err => next(err));
}
