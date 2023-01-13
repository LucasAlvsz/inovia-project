import { Order } from "@prisma/client"
import { Decimal } from "@prisma/client/runtime"

type OrderBody = {
	products: [
		{
			id: string
			quantity: number
		}
	]
}

type CreateOrder = Omit<Order, "id" | "products" | "createdAt" | "updatedAt">

type OrderProduct = { productId: string; quantity: number }

type OrderWithProducts = {
	id: number
	products: {
		productId: string
		quantity: number
	}[]
	totalProducts: number
	totalPrice: Decimal
	createdAt: Date
}

export { OrderBody, CreateOrder, OrderProduct, OrderWithProducts }
