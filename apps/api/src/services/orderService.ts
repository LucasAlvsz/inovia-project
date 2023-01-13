import { fileUtils } from "@/utils"
import { Decimal } from "@prisma/client/runtime"
import { authService, productService } from "@/services"
import { NotFoundError, UnauthorizedError } from "@/errors"
import { OrderBody, OrderWithProducts } from "@/types/OrderTypes"
import { orderRepository, productsRepository } from "@/respositories"

const validateOrderProducts = async (productsData: OrderBody) => {
	let totalPrice = 0
	let totalQuantity = 0
	const validatedProducts = await Promise.all(
		productsData.products.map(async product => {
			const productData = await productService.validadeProductById(
				product.id
			)
			if (!productData)
				throw new NotFoundError("Some product was not found")
			if (!productData.stock || productData.stock < product.quantity)
				throw new NotFoundError(
					`Product ${productData.name} has no stock`
				)

			totalPrice += productData.price * product.quantity
			totalQuantity += product.quantity

			return {
				productId: productData.id,
				quantity: product.quantity,
			}
		})
	)

	return { validatedProducts, totalPrice, totalQuantity }
}

const joinOrderAndProducts = async (orders: OrderWithProducts[]) => {
	const ordersWithProducts = await Promise.all(
		orders.map(async order => {
			const products = await Promise.all(
				order.products.map(async product => {
					const productData = await productsRepository.getById(
						product.productId
					)
					return {
						...product,
						name: productData.name,
						price: productData.price,
						brand: productData.brand,
						taxPercentage: productData.taxPercentage,
						stock: productData.stock,
						pictureUrl: fileUtils.getPictureUrl(
							productData.pictureKey
						),
						infos: productData.infos,
					}
				})
			)
			return {
				...order,
				products,
			}
		})
	)
	return ordersWithProducts
}

const getUserOrders = async (userId: number) => {
	if (!authService.validateUser({ id: userId }))
		throw new UnauthorizedError("Invalid user")

	const orders = await orderRepository.getByUserId(userId)

	return joinOrderAndProducts(orders)
}

const createOrder = async (productsData: OrderBody, userId: number) => {
	if (!authService.validateUser({ id: userId }))
		throw new UnauthorizedError("Invalid user")

	const validatedOrderProductsData = await validateOrderProducts(productsData)
	const { totalPrice, totalQuantity, validatedProducts } =
		validatedOrderProductsData

	const order = await orderRepository.create({
		totalPrice: totalPrice as unknown as Decimal,
		totalProducts: totalQuantity,
		userId,
	})

	await orderRepository.createOrderProducts(order.id, validatedProducts)

	await Promise.all(
		validatedProducts.map(async product => {
			await productsRepository.decrementStock(
				product.productId,
				product.quantity
			)
		})
	)
}

export default {
	getUserOrders,
	createOrder,
}
