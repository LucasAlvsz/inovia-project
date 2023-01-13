import { Request, Response } from "express"

import { orderService } from "@/services"

const getUserOrders = async (req: Request, res: Response) => {
	const { id: userId } = res.locals.userTokenData
	const orders = await orderService.getUserOrders(userId)
	res.status(200).send(orders)
}

const createOrder = async (req: Request, res: Response) => {
	const products = req.body
	const { id: userId } = res.locals.userTokenData
	await orderService.createOrder(products, userId)
	res.status(201).send()
}

export default {
	getUserOrders,
	createOrder,
}
