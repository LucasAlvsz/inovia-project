import { NextFunction, Request, Response } from "express"

import { jwtUtils } from "@/utils"
import { authSchemas } from "@/schemas"
import { UnauthorizedError } from "@/errors"

const validateBearerToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { error } = authSchemas.bearerHeaderSchema.validate(req.headers, {
		abortEarly: false,
	})
	if (error)
		throw new UnauthorizedError(
			"Invalid authorization header: " + error.message
		)

	const token = req.headers.authorization.split(" ")[1]
	const userTokenData = jwtUtils.validateToken(token)
	res.locals.userTokenData = userTokenData
	next()
}

export default validateBearerToken
