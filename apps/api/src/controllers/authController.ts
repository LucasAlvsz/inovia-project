import { authService } from "@/services"
import { Request, Response } from "express"

const signUp = async (req: Request, res: Response) => {
	const clientData = req.body
	await authService.registerClient(clientData)
	res.sendStatus(201)
}

export default {
	signUp,
}
