import "express-async-errors"
import { Router } from "express"
import { handleError } from "@/middlewares"
import authRouter from "./authRouter"

const router = Router()

router.use(authRouter).use(handleError)

export default router
