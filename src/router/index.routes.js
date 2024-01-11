import { Router } from "express";

import list_routes from "./list-character.routes.js";
import auth_routes from "./auth.routes.js";
import home from "../controller/home.js";

const router = Router();

router.get("/", home)

router.use("/liste-personnages", list_routes);

router.use("/authentification", auth_routes);


export default router;
