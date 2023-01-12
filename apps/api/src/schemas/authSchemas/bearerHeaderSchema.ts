import Joi from "joi"

import { BAREAR_TOKEN_PATTERN } from "./utils"

const bearerHeaderSchema = Joi.object({
	authorization: Joi.string().pattern(BAREAR_TOKEN_PATTERN).required(),
}).options({ allowUnknown: true })

export default bearerHeaderSchema
