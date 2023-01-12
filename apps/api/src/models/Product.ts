import { model, Schema } from "mongoose"

import { Product } from "@/types/productTypes"

const ProductSchema = new Schema<Product>({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	taxPercentage: {
		type: Number,
		required: true,
	},
	stock: {
		type: Number,
		required: true,
	},
	pictureKey: {
		type: String,
		required: true,
	},
	infos: [{ type: Schema.Types.Mixed }],

	userId: { type: Number, required: true },

	createdAt: {
		type: Date,
		default: Date.now,
	},
})

export default model("Product", ProductSchema)
