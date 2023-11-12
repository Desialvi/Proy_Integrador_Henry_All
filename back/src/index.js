// const express = require('express');
const server = require('./server');
const {conn} = require('./DB_connection')    
//server.get('/', (req, res) => {
//    res.send('¡Hola Mundo!');
//});

conn.sync({force: true}).then(() => {
const PORT = 3001;
server. listen(PORT, () => {
   console.log(`El servidor está corriendo en el puerto ${PORT}`)
});

}
)


