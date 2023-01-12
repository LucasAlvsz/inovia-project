import { Request, Response } from "express"

import { authService } from "@/services"

const signUp = async (req: Request, res: Response) => {
	const userData = {
		...req.body,
		...(req.file && { profilePictureKey: req.file.filename }),
	}

	await authService.register(userData)
	res.sendStatus(201)
}

const signIn = async (req: Request, res: Response) => {
	const userData = req.body
	const user = await authService.login(userData)
	res.status(200).send(user)
}

export default {
	signUp,
	signIn,
}
