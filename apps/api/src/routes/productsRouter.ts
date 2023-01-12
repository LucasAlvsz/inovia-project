import { Router } from "express"

import { multerConfig } from "@/config"
import { productSchemas } from "@/schemas"
import { productController } from "@/controllers"
import { validateBearerToken, validateSchema, handleFiles } from "@/middlewares"

const productsRouter = Router()

productsRouter
	.use(validateBearerToken)
	.get("/", productController.getAllProducts)
	.post(
		"/",
		handleFiles(multerConfig.imageOptions, "picture"),
		validateSchema(productSchemas.createProductSchema),
		productController.createProduct
	)
	.put("/")
	.delete("/")

export default productsRouter
