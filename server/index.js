import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect(CONNECTION_URL)
     .then(() => app.listen(PORT, ()=> console.log(`Server is running on: ${PORT}`)))
     .catch((error) => console.log(`${error} did not connect`))

