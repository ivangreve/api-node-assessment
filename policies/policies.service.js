const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('helpers/role');
const policiesRepository = require('../repositories/policies.repository')

async function getAll() {
    let policies = await policiesRepository.getPolicies();
    return policies;
}

async function getByClientId(id) {
    let policies = await policiesRepository.getPolicies();

    const policiesFiltered = policies.filter(u => u.clientId === id);
    if (!policiesFiltered) return;
    return policiesFiltered;
}

module.exports = {
    getAll,
    getByClientId
};