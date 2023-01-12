import Joi from "joi"

import productIdSchema from "./productIdSchema"
import { createProductBodySchema } from "./createProductSchema"

const updateProductParamsSchema = Joi.object({
	id: productIdSchema,
})

const updateProductSchema = Joi.object({
	body: createProductBodySchema,
	params: updateProductParamsSchema,
}).options({ allowUnknown: true })

export { updateProductParamsSchema }

export default updateProductSchema
