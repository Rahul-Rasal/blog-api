import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import bodyParser from "body-parser";
import connectDB from "./database/db.js";
import Routes from "./routes/route.js";
const app = express();

app.use(express.json());
app.use("/", Routes);

connectDB().catch((error) => {
  console.log("DB connection failed", error);
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
