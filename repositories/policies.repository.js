let axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

let getPolicies = async () => {
    try {
        let response = await axios.get(process.env.API_CLIENT_DATA);
        return response.data.policies;
    }
    catch {
        throw "Error requesting external API"
    }
}

module.exports = {
    getPolicies
};