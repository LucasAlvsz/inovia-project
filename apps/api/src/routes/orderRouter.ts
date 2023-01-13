import { Router } from "express"

import { orderSchemas } from "@/schemas"
import { orderController } from "@/controllers"
import { validateBearerToken, validateSchema } from "@/middlewares"

const orderRouter = Router()

orderRouter
	.use(validateBearerToken)
	.get("/", orderController.getUserOrders)
	.post(
		"/",
		validateSchema(orderSchemas.createOrderSchema),
		orderController.createOrder
	)

export default orderRouter
