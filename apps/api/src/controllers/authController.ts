import { authService } from "@/services"
import { Request, Response } from "express"

const signUp = async (req: Request, res: Response) => {
	const userData = req.body
	await authService.register(userData)
	res.sendStatus(201)
}

const signIn = async (req: Request, res: Response) => {
	const userData = req.body
	const token = await authService.login(userData)
	res.status(200).send(token)
}

export default {
	signUp,
	signIn,
}
