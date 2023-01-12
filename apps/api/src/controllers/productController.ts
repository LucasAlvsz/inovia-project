import { Request, Response } from "express"

import { productService } from "@/services"

const getAllProducts = async (req: Request, res: Response) => {
	const products = await productService.getAllProducts()
	res.status(200).send(products)
}

const createProduct = async (req: Request, res: Response) => {
	const productData = {
		...req.body,
		pictureKey: req.file?.filename,
	}
	const createdProduct = await productService.createProduct(productData)
	res.status(201).send(createdProduct)
}

export default {
	getAllProducts,
	createProduct,
}
