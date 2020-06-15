let axios = require('axios');

let getPolicies = async () => {
    try {
        let response = await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5');
        return response.data.policies;
    }
    catch{
        return { error: "Error from external service"}
    }
}

module.exports = {
    getPolicies
};