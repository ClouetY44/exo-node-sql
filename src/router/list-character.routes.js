import {Router} from "express"

import { list, detail } from "../controller/characters/views.js";

const router = Router();

router.get("/", list)

router.get("/details", detail)

export default router;