import Joi from "joi"

import productIdSchema from "./productIdSchema"

const deleteProductParamsSchema = Joi.object({
	id: productIdSchema,
}).required()

const deleteProductSchema = Joi.object({
	params: deleteProductParamsSchema,
}).options({ allowUnknown: true })

export default deleteProductSchema
