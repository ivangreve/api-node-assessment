const policiesRepository = require('../repositories/policies.repository')

async function getAll() {
    let policies = await policiesRepository.getPolicies();
    return policies;
}

async function getById(id) {
    let policies = await policiesRepository.getPolicies();
    const policie = policies.find(u => u.id === id);
    if (!policie) return;
    return policie;
}

async function getByClientId(id) {
    let policies = await policiesRepository.getPolicies();

    const policiesFiltered = policies.filter(u => u.clientId === id);
    if (!policiesFiltered) return;
    return policiesFiltered;
}

module.exports = {
    getAll,
    getByClientId,
    getById
};