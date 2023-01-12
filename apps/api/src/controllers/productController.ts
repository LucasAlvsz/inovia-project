import { Request, Response } from "express"

import { productService } from "@/services"

const getAllProducts = async (req: Request, res: Response) => {
	const products = await productService.getAllProducts()
	res.status(200).send(products)
}

const getProductById = async (req: Request, res: Response) => {
	const { id: productId } = req.params
	const product = await productService.getProductById(productId)
	res.status(200).send(product)
}

const createProduct = async (req: Request, res: Response) => {
	const productData = {
		...req.body,
		pictureKey: req.file?.filename,
	}
	const { id: userId } = res.locals.userTokenData
	const createdProduct = await productService.createProduct({
		...productData,
		userId,
	})
	res.status(201).send(createdProduct)
}

const updateProduct = async (req: Request, res: Response) => {
	const productData = req.body
	const { id: productId } = req.params
	const { id: userId } = res.locals.userTokenData

	const updatedProduct = await productService.updateProduct(
		productId,
		userId,
		productData
	)

	res.status(200).send(updatedProduct)
}

const updateProductPicture = async (req: Request, res: Response) => {
	const { id: productId } = req.params
	const { id: userId } = res.locals.userTokenData
	const pictureKey = req.file?.filename

	const updatedProduct = await productService.updateProductPicture(
		productId,
		userId,
		pictureKey
	)

	res.status(200).send(updatedProduct)
}

const deleteProduct = async (req: Request, res: Response) => {
	const { id: productId } = req.params
	const { id: userId } = res.locals.userTokenData

	await productService.deleteProduct(productId, userId)

	res.sendStatus(200)
}

export default {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	updateProductPicture,
	deleteProduct,
}
