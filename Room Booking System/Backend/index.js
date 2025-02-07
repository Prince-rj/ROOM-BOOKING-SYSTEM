const express = require('express');
const cors = require('cors');
const routes = require('./Routes/userRoutes');
const app = express();

require('./config/db')

app.use(cors()); // Enable CORS for all routes

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', routes);

app.listen(2000);