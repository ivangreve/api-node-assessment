const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('helpers/role');
const policiesRepository = require('../repositories/policies.repository')

async function getAll() {
    let policies = await policiesRepository.getPolicies();
    return policies;
}

async function getById(id) {
    let users = await clientsRepository.getPolicies();

    const user = users.find(u => u.id === id);
    if (!user) return;
    return user;
}

module.exports = {
    getAll,
    getById
};