// We use express to create our servers endpoints, and listen for & respond to requests from the frontend
import express from "express";
// We use dotenv so that we can access our environment variables
import "dotenv/config";
// We import our index.js so that we can query our database
import * as db from "./db/index.js";

// Create an instance of express
const requestHandler = express();
// Storing our port value from the .env file
const port = process.env.PORT;

// The middleware express.json() parses incoming JSON requests and puts the parsed data in req.body, making it accessible for further processing in our application
requestHandler.use(express.json());

// Your term 2 final project only needs to GET from the db (database)
requestHandler.get("/api/v1/get-template", (req, res) => {
	res.send("Hello World!");
});

// IF you finish your minimum required user stories, you can add routes for creating, updating, and deleting in the db. IF YOU FINISH MINIMUM REQUIREMENTS!





// Starting our http server and listening for requests!
requestHandler.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});