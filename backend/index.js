import express from "express";
import mongoose from "mongoose";
import bookRoutes from "./routes/book.js";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";

const app = express();

//Middleware for parsing request body
app.use(express.json());

app.use(cors());

//Allow custom origins with cors, meglio cosi possiamo gestire tutto cio che vogliamo che accada
/*app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);*/

app.use("/books", bookRoutes);

app.get("/", (request, response) => response.status(234).send("Welcome"));

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to databse");
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
