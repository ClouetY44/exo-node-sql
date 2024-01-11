import express from "express";
import path from "path";
import session from "express-session";
import "dotenv/config";


import router from "./router/index.routes.js";

const { LOCAL_PORT } = process.env;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

app.use(
    session({
        secret: "aYF8ISbYkXvzsrA4LVvRj6LQo5gLBqUX", 
        resave: false, 
        saveUninitialized: false,
        cookie: { 
            maxAge: 1000 * 60 * 60 * 24 * 7, 
            secure: false, 
            httpOnly: true, 
            sameSite: 'lax' 
        },
        rolling: true, 
    })
);

app.use((req, res, next) => {
    if(req.session?.name){
        res.locals.session = req.session.name;
    }
    next();
});

app.use(express.urlencoded({extended: true}))

app.use(router);

app.listen(LOCAL_PORT, () => {
    console.log(`Listening at http://localhost:${LOCAL_PORT}`);
});
