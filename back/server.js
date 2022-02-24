// express module is a web framework for node
// npm i express
// https://www.npmjs.com/package/express
const express = require(`express`);
const server = express();
server.listen(8000);

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
// npm i cors
// https://www.npmjs.com/package/cors
const cors = require(`cors`);
server.use(cors());

// option for POST method
server.use(express.json());
