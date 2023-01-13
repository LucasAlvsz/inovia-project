import "express-async-errors"
import { Router } from "express"

import authRouter from "./authRouter"
import orderRouter from "./orderRouter"
import productsRouter from "./productsRouter"

import { handleError } from "@/middlewares"

const router = Router()

router
	.use(authRouter)
	.use("/order", orderRouter)
	.use("/products", productsRouter)
	.use(handleError)

export default router
