import Joi from "joi"

import productIdSchema from "./productIdSchema"

const getProductByIdParamsSchema = Joi.object({
	id: productIdSchema,
}).required()

const getProductByIdSchema = Joi.object({
	params: getProductByIdParamsSchema,
}).options({ allowUnknown: true })

export default getProductByIdSchema
