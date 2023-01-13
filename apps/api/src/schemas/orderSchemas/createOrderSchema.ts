import Joi from "joi"

const createOrderBodySchema = Joi.object({
	products: Joi.array()
		.items(
			Joi.object({
				id: Joi.string().required(),
				quantity: Joi.number().required(),
			})
		)
		.min(1)
		.required(),
})

const createOrderSchema = Joi.object({
	body: createOrderBodySchema,
}).options({ allowUnknown: true })

export default createOrderSchema
