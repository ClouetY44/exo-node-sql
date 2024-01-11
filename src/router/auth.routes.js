import {Router} from "express"
import { login, register, addUser, loginUser, logout, dashboard } from "../controller/auth/views.js";

const router = Router();

router.get("/connexion", login)

router.get("/register", register)

router.get("/dashboard", dashboard)

router.get("/logout", logout)

router.post ("/addUser", addUser)

router.post ("/loginUser", loginUser)

export default router;