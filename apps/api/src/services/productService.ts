import { authService } from "@/services"
import { productsUtils, fileUtils } from "@/utils"
import { productsRepository } from "@/respositories"
import { CreateProduct, CreateProductBody } from "@/types/productTypes"
import {
	NotFoundError,
	UnauthorizedError,
	UnprocessableEntityError,
} from "@/errors"

const validadeProductById = async (productId: String) => {
	const product = await productsRepository.getById(productId)
	if (!product) null
	return product
}

const getAllProducts = async () => {
	const products = await productsRepository.getAll()
	return productsUtils.formatProductsData(products)
}

const getProductById = async (productId: String) => {
	const product = await validadeProductById(productId)
	if (!product) throw new NotFoundError("Product not found")

	return productsUtils.formatProductsData([product])[0]
}

const createProduct = async (productData: CreateProduct) => {
	if (!productData.pictureKey)
		throw new UnprocessableEntityError("Picture is required")

	if (!authService.validateUser({ id: productData.userId }))
		throw new UnauthorizedError("Invalid user")

	const createdProduct = await productsRepository.create(productData)
	return productsUtils.formatProductsData([createdProduct])[0]
}

const updateProduct = async (
	productId: String,
	userId: number,
	productData: CreateProductBody
) => {
	if (!authService.validateUser({ id: userId }))
		throw new UnauthorizedError("Invalid user")

	const productExists = await validadeProductById(productId)
	if (!productExists) throw new NotFoundError("Product not found")

	const updatedProduct = await productsRepository.updateById(productId, {
		...productData,
		pictureKey: productExists.pictureKey,
		userId,
	})
	return productsUtils.formatProductsData([updatedProduct])[0]
}

const updateProductPicture = async (
	productId: String,
	userId: number,
	newPictureKey: string
) => {
	if (!newPictureKey)
		throw new UnprocessableEntityError("Picture is required")

	if (!authService.validateUser({ id: userId }))
		throw new UnauthorizedError("Invalid user")

	const productExists = await validadeProductById(productId)
	if (!productExists) throw new NotFoundError("Product not found")

	fileUtils.deleteByFilename(productExists.pictureKey)

	const updatedProduct = await productsRepository.updateById(productId, {
		pictureKey: newPictureKey,
	})

	return productsUtils.formatProductsData([updatedProduct])[0]
}

const deleteProduct = async (productId: string, userId: number) => {
	if (!authService.validateUser({ id: userId }))
		throw new UnauthorizedError("Invalid user")

	const productExists = await validadeProductById(productId)
	if (!productExists) throw new NotFoundError("Product not found")

	fileUtils.deleteByFilename(productExists.pictureKey)
	await productsRepository.deleteById(productId)
}

export default {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	updateProductPicture,
	deleteProduct,
	validadeProductById,
}
