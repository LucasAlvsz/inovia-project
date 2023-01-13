import { prisma } from "@/config"
import { CreateOrder, OrderProduct } from "@/types/OrderTypes"

const create = async (data: CreateOrder) => {
	return prisma.order.create({
		data,
	})
}

const getAll = async () => {
	return prisma.order.findMany({
		include: {
			products: true,
		},
	})
}

const getByUserId = async (userId: number) => {
	return prisma.order.findMany({
		where: {
			userId,
		},
		select: {
			id: true,
			totalPrice: true,
			totalProducts: true,
			createdAt: true,
			products: {
				select: {
					productId: true,
					quantity: true,
				},
			},
		},
	})
}

const createOrderProducts = async (
	orderId: number,
	products: OrderProduct[]
) => {
	return prisma.product.createMany({
		data: [
			...products.map(product => ({
				orderId,
				quantity: product.quantity,
				productId: product.productId,
			})),
		],
	})
}

export default {
	create,
	createOrderProducts,
	getAll,
	getByUserId,
}
