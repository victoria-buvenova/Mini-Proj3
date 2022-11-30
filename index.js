const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs-wizards',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);
const mysql = require('mysql');
const dbConfig = require('./config/db.config.js');



const port = 3000

let cors = require("cors");
app.use(cors());
app.use(express.json());



const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });
  
  module.exports = connection;
  const charactersRoute = require('./routes/charactersRouteInitial'); 
  app.use('/characters', charactersRoute);

app.listen(port, () => {
    console.log(`Example applistening at http://localhost:${port}`)
})

// let sqlQuery = `START TRANSACTION`;

// connection.query(sqlQuery, (err, result, field) => {
//     if(err) throw new Error (err);
//     console.log('started transaction')
// });

// sqlQuery = `SET autocommit = 0`;

// connection.query(sqlQuery, (err, result, field) => {
//     if(err) throw new Error (err);
//     console.log('started transaction')
// });