import { Types } from "mongoose"

type Product = {
	name: string
	price: number
	brand: string
	taxPercentage: number
	stock: number
	pictureKey: string
	infos: Array<Object>
	userId: number
	createdAt: Date
}

type CreateProduct = Omit<Product, "createdAt">

type CreateProductBody = Omit<CreateProduct, "userId" | "pictureKey">

type FormatedProduct = {
	id: Types.ObjectId
	pictureUrl: string
} & { [key in keyof CreateProductBody]: CreateProductBody[key] }

export { Product, CreateProduct, CreateProductBody, FormatedProduct }
