const {
  filterByClientId,
  findByPolicieId
} = require("../services/policies.service.js");

test("Should return filtered by ClientId array", () => {
  const arrFiltered = filterByClientId(
    mockedPolicies,
    "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
  );

  expect(arrFiltered).toStrictEqual(mockedPoliciesFilteredByClientIdExpected);
});

test("Should return Whitley client object", () => {
  const objFound = findByPolicieId(
    mockedPolicies,
    "6f514ec4-1726-4628-974d-20afe4da130c"
  );

  const expectedObj = {
    id: "6f514ec4-1726-4628-974d-20afe4da130c",
    amountInsured: 697.04,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2014-09-12T12:10:23Z",
    installmentPayment: false,
    clientId: "a0ece5db-cd14-4f21-812f-966633e7be86"
  };

  expect(expectedObj).toStrictEqual(objFound);
});

const mockedPolicies = [
  {
    id: "64cceef9-3a01-49ae-a23b-3761b604800b",
    amountInsured: 1825.89,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2016-06-01T03:33:32Z",
    installmentPayment: true,
    clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
  },
  {
    id: "7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
    amountInsured: 399.89,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2015-07-06T06:55:49Z",
    installmentPayment: true,
    clientId: "a0ece5db-cd14-4f21-812f-966633e7be86"
  },
  {
    id: "56b415d6-53ee-4481-994f-4bffa47b5239",
    amountInsured: 2301.98,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2014-12-01T05:53:13Z",
    installmentPayment: false,
    clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
  },
  {
    id: "6f514ec4-1726-4628-974d-20afe4da130c",
    amountInsured: 697.04,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2014-09-12T12:10:23Z",
    installmentPayment: false,
    clientId: "a0ece5db-cd14-4f21-812f-966633e7be86"
  },
  {
    id: "25202f31-fff0-481c-acfd-1f3ff2a9bcbe",
    amountInsured: 2579.16,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2016-05-03T04:58:48Z",
    installmentPayment: false,
    clientId: "a0ece5db-cd14-4f21-812f-966633e7be86"
  },
  {
    id: "15b4430d-96f8-468e-98c0-3caaf8b0b3b6",
    amountInsured: 645.65,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2016-01-15T02:56:48Z",
    installmentPayment: true,
    clientId: "a0ece5db-cd14-4f21-812f-966633e7be86"
  },
  {
    id: "5a72ae47-d077-4f74-9166-56a6577e31b9",
    amountInsured: 751.67,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2015-08-05T04:05:01Z",
    installmentPayment: true,
    clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
  },
  {
    id: "4a582500-fab6-4efe-ae89-0c9ed750d0c7",
    amountInsured: 3074.24,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2014-06-24T09:21:06Z",
    installmentPayment: false,
    clientId: "a0ece5db-cd14-4f21-812f-966633e7be86"
  },
  {
    id: "3a774f4e-0e70-488f-ac9f-ee211c8d5ece",
    amountInsured: 1930.01,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2016-10-01T09:19:32Z",
    installmentPayment: true,
    clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
  },
  {
    id: "d973993a-d35e-4d12-abb5-38083d556101",
    amountInsured: 1609.4,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2016-01-31T03:52:33Z",
    installmentPayment: true,
    clientId: "a0ece5db-cd14-4f21-812f-966633e7be86"
  },
  {
    id: "cd63a392-0a8c-4c48-9cbe-e0a991d65c13",
    amountInsured: 804.87,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2015-02-13T04:21:59Z",
    installmentPayment: false,
    clientId: "a0ece5db-cd14-4f21-812f-966633e7be86"
  },
  {
    id: "5d6b141e-0d22-4a84-abdb-6200ddaad7d0",
    amountInsured: 1919.66,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2014-11-02T09:16:22Z",
    installmentPayment: true,
    clientId: "a0ece5db-cd14-4f21-812f-966633e7be86"
  }
];

const mockedPoliciesFilteredByClientIdExpected = [
  {
    id: "64cceef9-3a01-49ae-a23b-3761b604800b",
    amountInsured: 1825.89,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2016-06-01T03:33:32Z",
    installmentPayment: true,
    clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
  },
  {
    id: "56b415d6-53ee-4481-994f-4bffa47b5239",
    amountInsured: 2301.98,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2014-12-01T05:53:13Z",
    installmentPayment: false,
    clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
  },
  {
    id: "5a72ae47-d077-4f74-9166-56a6577e31b9",
    amountInsured: 751.67,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2015-08-05T04:05:01Z",
    installmentPayment: true,
    clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
  },
  {
    id: "3a774f4e-0e70-488f-ac9f-ee211c8d5ece",
    amountInsured: 1930.01,
    email: "inesblankenship@quotezart.com",
    inceptionDate: "2016-10-01T09:19:32Z",
    installmentPayment: true,
    clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
  }
];
