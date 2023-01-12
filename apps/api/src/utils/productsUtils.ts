import { Document, Types } from "mongoose"

import { fileUtils } from "@/utils"
import { FormatedProduct, Product } from "@/types/productTypes"

const formatProductsData = (
	product: (Document<unknown, any, Product> &
		Product & {
			_id: Types.ObjectId
		})[]
): FormatedProduct[] => {
	const formattedProducts = product.map(product => {
		const pictureUrl = fileUtils.getPictureUrl(product.pictureKey)
		return {
			id: product._id,
			name: product.name,
			price: product.price,
			brand: product.brand,
			taxPercentage: product.taxPercentage,
			stock: product.stock,
			pictureUrl,
			infos: [...product.infos],
		}
	})

	return formattedProducts
}

export default { formatProductsData }
