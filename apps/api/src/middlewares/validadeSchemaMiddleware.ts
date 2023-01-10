import { UnprocessableEntityError } from "@/errors"
import { Request, Response, NextFunction } from "express"
import { ObjectSchema } from "joi"

const validateSchema = (schema: ObjectSchema) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req, { abortEarly: false })
		if (error)
			throw new UnprocessableEntityError(
				error.details
					.map(detail => detail.message.replace(/"/g, ""))
					.join(", ")
			)
		next()
	}
}

export default validateSchema
