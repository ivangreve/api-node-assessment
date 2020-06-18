const express = require("express");
const router = express.Router();
const policiesService = require("../services/policies.service");
const clientService = require("../services/clients.service");
const authorize = require("helpers/authorize");
const Role = require("helpers/role");
const asyncMiddleware = require("../helpers/asyncMiddleware");

// Policies Controller ROUTES
router.get(
  "/",
  authorize([Role.Admin]),
  asyncMiddleware(async (req, res, next) => getAll(req, res, next))
); // Additional Service => Only Admin

router.get(
  "/ClientId/:clientId",
  authorize([Role.Admin]),
  asyncMiddleware(async (req, res, next) => getByClientId(req, res, next))
); // Additional Service => Only Admin

router.get(
  "/ClientName/:clientName",
  authorize([Role.Admin]),
  asyncMiddleware(async (req, res, next) => getByClientName(req, res, next))
); // Get the list of policies linked to a user name -> Can be accessed by users with role "admin"

module.exports = router;

async function getAll(req, res, next) {
  const policies = await policiesService.getAll();
  res.json(policies);
}

async function getByClientId(req, res, next) {
  const clientId = req.params.clientId;

  const policies = await policiesService.getByClientId(clientId);
  res.json(policies);
}

async function getByClientName(req, res, next) {
  const clientName = req.params.clientName;
  const client = await clientService.getByName(clientName); //Get client data by name

  if (client.lenght) return [];
  const policies = await policiesService.getByClientId(client.id);
  res.json(policies);
}
