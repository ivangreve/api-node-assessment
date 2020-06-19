const app = require("../server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
const { createUserToken } = require("../services/clients.service.js");
const dotenv = require("dotenv");
dotenv.config();

///////////////////////////////////////////
/////////// Clients Controller ////////////
///////////////////////////////////////////

it("api/clients => USER and ADMIN", async (done) => {
  const url = "/api/clients";
  const userTokenAdmin = createUserToken(clientRoleAdmin);

  const responseAdmin = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenAdmin.token);
  expect(responseAdmin.status).toBe(200);

  const userTokenUser = createUserToken(clientRoleUser);
  const responseUser = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenUser.token);
  expect(responseUser.status).toBe(200);

  done();
});

it("api/clients/Id/:id => USER and ADMIN", async (done) => {
  const url = "/api/clients/Id/0178914c-548b-4a4c-b918-47d6a391530c";
  const userTokenAdmin = createUserToken(clientRoleAdmin);

  const responseAdmin = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenAdmin.token);
  expect(responseAdmin.status).toBe(200);

  const userTokenUser = createUserToken(clientRoleUser);
  const responseUser = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenUser.token);
  expect(responseUser.status).toBe(200);

  done();
});

it("api/clients/Name/:name => USER and ADMIN", async (done) => {
  const url = "/api/clients/Name/Whitley";
  const userTokenAdmin = createUserToken(clientRoleAdmin);

  const responseAdmin = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenAdmin.token);
  expect(responseAdmin.status).toBe(200);

  const userTokenUser = createUserToken(clientRoleUser);
  const responseUser = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenUser.token);
  expect(responseUser.status).toBe(200);

  done();
});

it("api/clients/PolicieId/:policieId => only ADMIN", async (done) => {
  const url = "/api/clients/PolicieId/42ab2da6-a60a-4284-ac1b-163984a9db32";
  const userTokenAdmin = createUserToken(clientRoleAdmin);

  const responseAdmin = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenAdmin.token);
  expect(responseAdmin.status).toBe(200);

  const userTokenUser = createUserToken(clientRoleUser);
  const responseUser = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenUser.token);
  expect(responseUser.status).toBe(401);

  done();
});

///////////////////////////////////////////
/////////// Policies Controller ///////////
///////////////////////////////////////////
it("api/policies/ => only ADMIN", async (done) => {
  const url = "/api/policies";
  const userTokenAdmin = createUserToken(clientRoleAdmin);

  const responseAdmin = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenAdmin.token);
  expect(responseAdmin.status).toBe(200);

  const userTokenUser = createUserToken(clientRoleUser);
  const responseUser = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenUser.token);
  expect(responseUser.status).toBe(401);

  done();
});

it("api/policies/ClientId/:clientId => only ADMIN", async (done) => {
  const url = "/api/policies/ClientId/0178914c-548b-4a4c-b918-47d6a391530c";
  const userTokenAdmin = createUserToken(clientRoleAdmin);

  const responseAdmin = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenAdmin.token);
  expect(responseAdmin.status).toBe(200);

  const userTokenUser = createUserToken(clientRoleUser);
  const responseUser = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenUser.token);
  expect(responseUser.status).toBe(401);

  done();
});

it("api/policies/ClientName/:clientName => only ADMIN", async (done) => {
  const url = "/api/policies/ClientName/Manning";
  const userTokenAdmin = createUserToken(clientRoleAdmin);

  const responseAdmin = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenAdmin.token);
  expect(responseAdmin.status).toBe(200);

  const userTokenUser = createUserToken(clientRoleUser);
  const responseUser = await request
    .get(url)
    .set("Authorization", "Bearer " + userTokenUser.token);
  expect(responseUser.status).toBe(401);

  done();
});

// Users mocks to generate differents role Tokens

const clientRoleAdmin = {
  id: "0178914c-548b-4a4c-b918-47d6a391530c",
  name: "Whitley",
  email: "whitleyblankenship@quotezart.com",
  role: "admin"
};

const clientRoleUser = {
  id: "16c137e6-82e4-41bf-a99d-afa27abd0c78",
  name: "Evangeline",
  email: "evangelineblankenship@quotezart.com",
  role: "user"
};
