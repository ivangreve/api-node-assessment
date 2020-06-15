const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('helpers/role');
const clientsRepository = require('../repositories/clients.repository')


async function authenticate({ email }) {
    let users = await clientsRepository.getUsers();
    console.log(users);
    const user = users.find(u => u.email === email);
    if (user) {
        const token = jwt.sign({ id: user.id, role: user.role }, config.secret);
        return {
            ...user,
            token
        };
    }
}

async function getAll() {
    let users = await clientsRepository.getUsers();
    return users;
}

async function getById(id) {
    let users = await clientsRepository.getUsers();
    const user = users.find(u => u.id === id);
    if (!user) return;
    return user;
}

module.exports = {
    authenticate,
    getAll,
    getById
};