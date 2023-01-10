import { Request, Response, NextFunction } from "express"
import { MulterError } from "multer"
import { AppError } from "@/errors"

const handleError = (
	err: AppError | any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(err)
	if (err instanceof MulterError)
		return res.status(422).send({ error: { message: err.message } })

	err instanceof AppError
		? res.status(err.code).send({ error: { message: err.message } })
		: res.status(500).send("Internal server error")
}

export default handleError
