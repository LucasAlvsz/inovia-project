import { productsUtils } from "@/utils"
import { UnprocessableEntityError } from "@/errors"
import { CreateProduct } from "@/types/productTypes"
import { productsRepository } from "@/respositories"

const getAllProducts = async () => {
	const products = await productsRepository.getAll()
	return productsUtils.formatProductsData(products)
}

const createProduct = async (productData: CreateProduct) => {
	if (!productData.pictureKey)
		throw new UnprocessableEntityError("Picture is required")

	const createdProduct = await productsRepository.create(productData)
	return productsUtils.formatProductsData([createdProduct])[0]
}

export default {
	getAllProducts,
	createProduct,
}
