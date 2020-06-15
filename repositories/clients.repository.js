let axios = require('axios');

  
let getUsers = async () => {
    try {
        let users = await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac');
        return users.data.clients;
    }
    catch{
        return { error: "Error from external service"}
    }
}

let getUserByEmail = async(email) => {
    try {
        let users = await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac');
        let filteredClient = users.data.clients.filter((client) => client.email == email)
        
        return filteredClient;
        
    }
    catch{
        return { success: false, message: "Error from external service"}
    }

}

module.exports = {
    getUsers,
    getUserByEmail
};
