const express = require('express');
const router = express.Router();
const policiesService = require('../policies/policies.service');
const authorize = require('helpers/authorize')
const Role = require('helpers/role');

// routes
router.get('/', authorize(), getAll);  // all authenticated users
router.get('/:clientId', authorize(), getByClientId);  // all authenticated users
module.exports = router;


function getByClientId(req, res, next) {
    policiesService.getAll()
        .then(policies => res.json(policies))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    policiesService.getAll()
        .then(policies => res.json(policies))
        .catch(err => next(err));
}



