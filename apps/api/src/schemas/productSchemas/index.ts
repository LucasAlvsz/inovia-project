import Joi from "joi"

import { CreateProductBody } from "@/types/productTypes"

const createProductBodySchema = Joi.object<CreateProductBody>({
	name: Joi.string().required(),
	price: Joi.number().required(),
	brand: Joi.string().required(),
	taxPercentage: Joi.number().required(),
	stock: Joi.number().required(),
	infos: Joi.array().items(Joi.object().max(1)).required(),
})

const createProductSchema = Joi.object({
	body: createProductBodySchema,
}).options({ allowUnknown: true })

export default { createProductSchema }
