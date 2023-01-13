import { Product } from "@/models"
import { CreateProduct } from "@/types/productTypes"

const create = async (productData: CreateProduct) => {
	return Product.create(productData)
}

const getAll = async () => {
	return Product.find()
}

const getById = async (id: String) => {
	return Product.findById(id)
}

const updateById = async (
	id: String,
	productData:
		| CreateProduct
		| {
				[key in keyof CreateProduct]?: CreateProduct[key]
		  }
) => {
	return Product.findByIdAndUpdate(id, productData, { new: true })
}

const decrementStock = async (id: String, quantity: number) => {
	await Product.findByIdAndUpdate(id, {
		$inc: { stock: -quantity },
	})
}

const incrementStock = async (id: String, quantity: number) => {
	await Product.findByIdAndUpdate(id, {
		$inc: { stock: quantity },
	})
}

const deleteById = async (id: String) => {
	return Product.findByIdAndDelete(id)
}

const deleteAll = async () => {
	return Product.deleteMany()
}

export default {
	create,
	getAll,
	getById,
	updateById,
	decrementStock,
	incrementStock,
	deleteById,
	deleteAll,
}
