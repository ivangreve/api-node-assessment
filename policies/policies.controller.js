const express = require('express');
const router = express.Router();
const policiesService = require('../policies/policies.service');
const clientService = require('../clients/clients.service');
const authorize = require('helpers/authorize')
const Role = require('helpers/role');

// routes
router.get('/', authorize([Role.Admin]), getAll); // Additional Service => Only Admin
router.get('/policiesByClientId/:clientId', authorize([Role.Admin]), getByClientId);  // Additional Service => Only Admin
router.get('/policiesByClientName/:clientName', authorize([Role.Admin]), getByClientName); // Get the list of policies linked to a user name -> Can be accessed by users with role "admin"

module.exports = router;


function getAll(req, res, next) {
    policiesService.getAll()
        .then(policies => res.json(policies))
        .catch(err => next(err));
}

function getByClientId(req, res, next) {
    const clientId = req.params.clientId;

    policiesService.getByClientId(clientId)
        .then(policies => res.json(policies))
        .catch(err => next(err));
}

async function getByClientName(req, res, next) {
    const clientName = req.params.clientName;
    let client = await clientService.getByName(clientName); //Get client data by name

    policiesService.getByClientId(client.id)
        .then(policies => res.json(policies))
        .catch(err => next(err));
}
