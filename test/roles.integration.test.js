let axios = require('axios');
const {createUserToken} = require('../services/clients.service.js');
const dotenv = require('dotenv');
dotenv.config();

// IMPORTANT! To run this integration Test the server must be running

async function getClientResponse(token){
    let url = process.env.API_BASE_URL + '/api/clients'
    console.log("URL: " + url)
    let authHeader = "Bearer " + token;

    let response = await axios.get(url, {'headers': { 'Authorization': authHeader }});
    return response;
}

async function getClientsByIdResponse(id, token){
    let url = process.env.API_BASE_URL + '/api/clients/clientById/' + id;
    console.log("URL: " + url)
    let authHeader = "Bearer " + token;

    let response = await axios.get(url, {'headers': { 'Authorization': authHeader }});
    return response;
}

async function getClientByNameResponse(name, token){
    let url = process.env.API_BASE_URL + '/api/clients/clientByName/' + name;
    console.log("URL: " + url)
    let authHeader = "Bearer " + token;

    let response = await axios.get(url, {'headers': { 'Authorization': authHeader }});
    return response;
}

async function getClientByPolicieIdResponse(policieId, token){
    let url = process.env.API_BASE_URL + '/api/clients/clientByPolicieId/' + policieId;
    console.log("URL: " + url)
    let authHeader = "Bearer " + token;

    let response = await axios.get(url, {'headers': { 'Authorization': authHeader }});
    return response;
}

async function getPoliciesByClientNameResponse(clientName, token){
    let url = process.env.API_BASE_URL + '/api/policies/policiesByClientName/' + clientName;
    console.log("URL: " + url)
    let authHeader = "Bearer " + token;

    let response = await axios.get(url, {'headers': { 'Authorization': authHeader }});
    return response;
}


// Role Authorization TESTs

test("api/clients/clientById/:id => Can be accessed by users with role users and admin", async () => {
    let userToken = createUserToken(clientRoleAdmin);

    let response = await getClientsByIdResponse("0178914c-548b-4a4c-b918-47d6a391530c", userToken.token);
    expect(response.status).toBe(200);

    userToken = createUserToken(clientRoleUser);
    response = await getClientsByIdResponse("0178914c-548b-4a4c-b918-47d6a391530c", userToken.token);
    
    expect(response.status).toBe(200);
});

test("api/clients/clientById/:name => Can be accessed by users with role users and admin", async () => {
    let userToken = createUserToken(clientRoleAdmin);
    let response = await getClientByNameResponse("0178914c-548b-4a4c-b918-47d6a391530c", userToken.token);
    expect(response.status).toBe(200);

    userToken = createUserToken(clientRoleUser);
    response = await getClientByNameResponse("0178914c-548b-4a4c-b918-47d6a391530c", userToken.token);
    
    expect(response.status).toBe(200);
});

test("api/clients/clientById/:policieId => Get the user linked to a policy number -> Can be accessed by users with role admin", async () => {
    let userToken = createUserToken(clientRoleAdmin);
    let response = await getClientByPolicieIdResponse("42ab2da6-a60a-4284-ac1b-163984a9db32", userToken.token);
    expect(response.status).toBe(200);

    userToken = createUserToken(clientRoleUser);
    try {
        response = await getClientByPolicieIdResponse("42ab2da6-a60a-4284-ac1b-163984a9db32", userToken.token);
    }catch (error){
        console.log(error.response.status);
        expect(error.response.status).toBe(401);
        expect(error.response.data.message).toBe("Unauthorized");

    }
});

test("api/policiesByClientName/:clientName => Get the list of policies linked to a user name -> Can be accessed by users with role admin", async () => {
    let userToken = createUserToken(clientRoleAdmin);
    let response = await getPoliciesByClientNameResponse("Manning", userToken.token);
    expect(response.status).toBe(200);

    userToken = createUserToken(clientRoleUser);
    try {
        response = await getPoliciesByClientNameResponse("Manning", userToken.token);
    }catch (error){
        console.log(error.response.status);
        expect(error.response.status).toBe(401);
        expect(error.response.data.message).toBe("Unauthorized");

    }
});



// Users mocks to generate differents role Tokens
const clientRoleAdmin = {
    "id": "0178914c-548b-4a4c-b918-47d6a391530c",
    "name": "Whitley",
    "email": "whitleyblankenship@quotezart.com",
    "role": "admin"
};

const clientRoleUser = {
    "id": "16c137e6-82e4-41bf-a99d-afa27abd0c78",
    "name": "Evangeline",
    "email": "evangelineblankenship@quotezart.com",
    "role": "user"
}