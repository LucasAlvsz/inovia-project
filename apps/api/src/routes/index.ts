import "express-async-errors"
import { Router } from "express"

import authRouter from "./authRouter"
import productsRouter from "./productsRouter"

import { handleError } from "@/middlewares"

const router = Router()

router.use(authRouter).use("/products", productsRouter).use(handleError)

export default router
