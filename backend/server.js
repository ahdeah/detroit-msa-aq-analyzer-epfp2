// We use express to create our servers endpoints, and listen for & respond to requests from the frontend
import express from "express";
// We use dotenv so that we can access our environment variables
import "dotenv/config";

// Create an instance of express
const requestHandler = express();
// Storing our port value from the .env file
const port = process.env.PORT;

// This project only needs to GET from the db





// Starting our http server and listening for requests!
requestHandler.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});