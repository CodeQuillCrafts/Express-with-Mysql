const express = require('express');
const bodyParser = require('body-parser');
const eventRoute = require('./routes/eventRoute.js');

// Running the express app
const app = express();

// PORT
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/event', eventRoute);

// Server started
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})
