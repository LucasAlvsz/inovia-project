import Joi from "joi"

const bodySchema = Joi.object({
	login: Joi.string().required(),
	password: Joi.string().required(),
})

const signInSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default signInSchema
