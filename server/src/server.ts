import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { connectToDatabase } from "./database";
import { employeeRouter } from "./employee.routes";

// Load environment variables from the .env file, where the TIGRIS_URI is configured
dotenv.config();

const { TIGRIS_URI } = process.env;

if (!TIGRIS_URI) {
    console.error("No TIGRIS_URI environment variable has been defined in config.env");
    process.exit(1);
}

const CLIENT_ID = process.env.TIGRIS_CLIENT_ID || undefined;
const CLIENT_SECRET = process.env.TIGRIS_CLIENT_SECRET || undefined;

connectToDatabase(TIGRIS_URI, CLIENT_ID, CLIENT_SECRET)
    .then(() => {
        const app = express();
        app.use(cors());
        app.use("/employees", employeeRouter);

        // start the Express server
        app.listen(5200, () => {
            console.log(`Server running at http://localhost:5200...`);
        });

    })
    .catch(error => console.error(error));
