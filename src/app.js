import express from "express";
import path from "path";
import "dotenv/config";

import router from "./router/index.routes.js";

const { LOCAL_PORT } = process.env;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

app.use(router);

app.listen(LOCAL_PORT, () => {
    console.log(`Listening at http://localhost:${LOCAL_PORT}`);
});
