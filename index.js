import express, { response } from "express";
import mongoose from "mongoose";
import User from "./models/user.js";
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/users", async (require, response) => {
    
    const users = await User.find()
    
    return response.status(200).json(users);
});

app.post("/users", async (require, response) => {
  const user = require.body

  const newUser = await User.create(user)

  return response.status(201).json(newUser);
});

mongoose
  .connect(
    "mongodb+srv://oweslley03:BancoMongo03Weslley@cluster0.b3uma5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("banco de dados runing");
  })
  .catch(() => {
    console.log("conexaão mal sucedida")
});

app.listen(PORT, () => {
  console.log(`servidor runing http://localhost:${PORT}`);
});
