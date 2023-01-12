import { UnauthorizedError } from "@/errors"
import jwt from "jsonwebtoken"

const generateToken = (
	data: {},
	expiresIn: number | string | undefined = null
) => {
	return jwt.sign(data, process.env.JWT_SECRET, {
		...(expiresIn && { expiresIn }),
	})
}
const validateToken = (token: string) => {
	return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) throw new UnauthorizedError(err.message)
		return decoded
	})
}

export default { generateToken, validateToken }
