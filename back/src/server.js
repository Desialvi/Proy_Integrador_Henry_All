const express = require('express');
const morgan= require('morgan')
const router = require('./routes/routes')
const cors = require('cors')
const corsOptions = {
     origin: 'http://localhost:5173/',
     methods: 'GET',
     optionsSuccessStatus: 200,
     credentials: true,
   };

const server = express();
server.use(cors(corsOptions))
server.use(express.json())
server.use(morgan('dev'))
server.use(router)

// server.use(cors())


module.exports = server;