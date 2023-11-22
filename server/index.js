import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
     .then(() => app.listen(PORT, ()=> console.log(`Server is running on: ${PORT}`)))
     .catch((error) => console.log(`${error} did not connect`));

