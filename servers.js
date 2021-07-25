// servers.js is only for the making of the socketio server and the express server
// Agar.io clone
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.static(__dirname + '/public'));
const socketio = require('socket.io');
// const expressServer = app.listen(5000);
// console.log('Prueba 2021');
const expressServer = app.listen(process.env.PORT || 5000); // Para heroku
// const expressServer = app.listen(process.env.PORT || 8080);
const io = socketio(expressServer);
const helmet = require('helmet')
app.use(helmet());
console.log("Express and socketio are listening on port ");
// App organization
module.exports = {
    app,
    io
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// CORS
// app.use(cors(
//     config.application.cors.server
// ));