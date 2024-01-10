import {Router} from "express"
import { login, register } from "../controller/auth/viewsAuth.js";

const router = Router();

router.get("/connexion", login)

router.get("/register", register)

export default router;