// importing the express
const express = require('express');

// called the function by factory method
const app = express();

// importing morgan for logging requests
const morgan = require("morgan");

// importing the routers
const tourRouter = require('./router/tourRouter');
const userRouter = require('./router/userRouter');

// port number
const port = 3000;


// ========================== MIDDLEWARE ==========================

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Morgan middleware to log HTTP requests
app.use(morgan("combined"));


// ========================== HOME ROUTE ==========================

// home route
app.get('/', (req, res) => {
    console.log("this request is from this device");
    res.send("HOME PAGE");
});


// ========================== ROUTERS ==========================

// importing the tourRouter from router folder
app.use('/packages', tourRouter);

// importing the userRouter from router folder
app.use('/user', userRouter);

// here packages is the home route and tourRouter is the router
// which we have created in the router folder


// ========================== START SERVER ==========================

// this will run the server in the PORT - 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});