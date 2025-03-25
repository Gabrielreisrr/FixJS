import express from "express";
import User from "./ex2Users.js";

const app = express();
app.use(express.json());

const users = [new User("Alice", 25), new User("Bob", 30)];

app.get("/users", (req, res) => {
  res.json(users);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
