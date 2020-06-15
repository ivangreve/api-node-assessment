let axios = require('axios');
  
let getUsers = async () => {
    try {
        let users = await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac');
        return users.data.clients;
    }
    catch {
        throw "Error requesting external API"
    }
}

module.exports = {
    getUsers
};
