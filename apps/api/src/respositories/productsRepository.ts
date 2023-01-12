import { Product } from "@/models"

import { CreateProduct } from "@/types/productTypes"

const create = async (productData: CreateProduct) => {
	return Product.create(productData)
}

const getAll = async () => {
	return await Product.find()
}

const deleteAll = async () => {
	return Product.deleteMany()
}

export default {
	create,
	getAll,
	deleteAll,
}
