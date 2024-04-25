import express, { response } from "express";
import connectDatabase from "./database/db.js";
import routes from './routes.js'

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(routes)

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`servidor runing http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`conexaão mal sucedida, ${error}`);
  });


