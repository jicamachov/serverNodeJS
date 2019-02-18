'use strict';
const path = require('path');
const express = require('express');

const app = express();

const staticPath = path.join(__dirname, '/'); // Main file path.
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
const port = process.env.PORT || 3000;
app.set('port', port);

const server = app.listen(app.get('port'), function() {
    console.log(`listening in port ${port}`);
});