import { Router } from "express";

import list_routes from "./list-character.routes.js";
import auth_routes from "./auth.routes.js";
import home from "../controller/home.js";

const router = Router();

// accueil
router.get("/", home)

// middleware vers les routes liste-personnages
router.use("/liste-personnages", list_routes);

// middleware vers les routes liste-personnages
router.use("/authentification", auth_routes);


export default router;
