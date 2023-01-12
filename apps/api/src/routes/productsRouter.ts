import { Router } from "express"

import { multerConfig } from "@/config"
import { productSchemas } from "@/schemas"
import { productController } from "@/controllers"
import { validateBearerToken, validateSchema, handleFiles } from "@/middlewares"

const productsRouter = Router()

productsRouter
	.use(validateBearerToken)
	.get("/", productController.getAllProducts)
	.get(
		"/:id",
		validateSchema(productSchemas.getProductByIdSchema),
		productController.getProductById
	)
	.post(
		"/",
		handleFiles(multerConfig.imageOptions, "picture"),
		validateSchema(productSchemas.createProductSchema),
		productController.createProduct
	)
	.put(
		"/:id",
		validateSchema(productSchemas.updateProductSchema),
		productController.updateProduct
	)
	.patch(
		"/picture/:id",
		handleFiles(multerConfig.imageOptions, "picture"),
		productController.updateProductPicture
	)
	.delete(
		"/:id",
		validateSchema(productSchemas.deleteProductSchema),
		productController.deleteProduct
	)

export default productsRouter
