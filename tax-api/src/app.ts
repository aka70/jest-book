import cors from "cors";
import express from "express";

const app = express();

app.use(cors({ origin: "http://localhost:3001" }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/check-post", (req, res) => {
  res.send("Hello POST!");
});

export default app;
