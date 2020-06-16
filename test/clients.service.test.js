const {findByName, findById, findByEmail, createUserToken} = require('../services/clients.service.js');

const mockedClients =  
[
  {
    "id": "a0ece5db-cd14-4f21-812f-966633e7be86",
    "name": "Britney",
    "email": "britneyblankenship@quotezart.com",
    "role": "admin"
  },
  {
    "id": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
    "name": "Manning",
    "email": "manningblankenship@quotezart.com",
    "role": "admin"
  },
  {
    "id": "a3b8d425-2b60-4ad7-becc-bedf2ef860bd",
    "name": "Barnett",
    "email": "barnettblankenship@quotezart.com",
    "role": "user"
  },
  {
    "id": "44e44268-dce8-4902-b662-1b34d2c10b8e",
    "name": "Merrill",
    "email": "merrillblankenship@quotezart.com",
    "role": "user"
  },
  {
    "id": "0178914c-548b-4a4c-b918-47d6a391530c",
    "name": "Whitley",
    "email": "whitleyblankenship@quotezart.com",
    "role": "admin"
  },
  {
    "id": "a74c83c5-e271-4ecf-a429-d47af952cfd4",
    "name": "Lamb",
    "email": "lambblankenship@quotezart.com",
    "role": "user"
  }
]

test("Should return Whitley client object", () => {
    let objFound = findByName(mockedClients, "Whitley");
    const expectedObj = {
        "id": "0178914c-548b-4a4c-b918-47d6a391530c",
        "name": "Whitley",
        "email": "whitleyblankenship@quotezart.com",
        "role": "admin"
      };
    
    expect(objFound).toStrictEqual(expectedObj);
});


test("Should return Lamb client object", () => {
  let objFound = findById(mockedClients, "a74c83c5-e271-4ecf-a429-d47af952cfd4");
  const expectedObj = {
    "id": "a74c83c5-e271-4ecf-a429-d47af952cfd4",
    "name": "Lamb",
    "email": "lambblankenship@quotezart.com",
    "role": "user"
  };
  
  expect(objFound).toStrictEqual(expectedObj);
});


test("Should return Manning client object", () => {
  let objFound = findByEmail(mockedClients, "manningblankenship@quotezart.com");
  const expectedObj = {
    "id": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
    "name": "Manning",
    "email": "manningblankenship@quotezart.com",
    "role": "admin"
  };
  
  expect(objFound).toStrictEqual(expectedObj);
});


//Create token
test("Should create and return a correctly token obj", () => {
  const user = {
    "id": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
    "name": "Manning",
    "email": "manningblankenship@quotezart.com",
    "role": "admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4ZmQxNTliLTU3YzQtNGQzNi05YmQ3LWE1OWNhMTMwNTdiYiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU5MjMzODA0OH0.bvnzWsOO36pbvd1P959SZw36cqxXlkE6JPn0Evf_kG0"
  };

  let userToken = createUserToken(user);
  let {payload} = jwtDecode(userToken.token);
  
  expect(payload.id).toStrictEqual(user.id);
  expect(payload.role).toStrictEqual(user.role);
});

function jwtDecode(t) {
  let token = {};
  token.raw = t;
  token.header = JSON.parse(window.atob(t.split('.')[0]));
  token.payload = JSON.parse(window.atob(t.split('.')[1]));
  return (token)
}
