import {Router} from "express"

import { list, detail } from "../controller/characters/viewsCharacter.js";

const router = Router();

router.get("/", list)

router.get("/details", detail)

export default router;