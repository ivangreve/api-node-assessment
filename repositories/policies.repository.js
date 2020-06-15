let axios = require('axios');

let getPolicies = async () => {
    try {
        let response = await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5');
        return response.data.policies;
    }
    catch {
        throw "Error requesting external API"
    }
}

module.exports = {
    getPolicies
};