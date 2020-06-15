require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('helpers/error-handler');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/api/auth', require('./auth/auth.controller'));
app.use('/api/clients', require('./clients/clients.controller'));
app.use('/api/policies', require('./policies/policies.controller'));
// global error handler
app.use(errorHandler);


const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});