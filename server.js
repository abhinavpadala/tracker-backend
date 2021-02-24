import express from "express";
import bodyParser from "body-parser";
import routes from "./app/routes/appRoutes.js";
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

console.log("API server started on: " + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
