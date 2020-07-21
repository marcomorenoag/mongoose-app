const express = require('express');
const app = express();
const app_port = 3000;

const productRoutes = require('./routes/products');

require('./database');

// Middleware (process before)
app.use(express.json());

// Routing
app.use(productRoutes);

// Starting server
app.listen(app_port);
console.log('Server on port:', app_port);