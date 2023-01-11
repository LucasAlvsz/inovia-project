import Joibase from "joi"
import JoiDate from "@joi/date"

const Joi = Joibase.extend(JoiDate)

const bodySchema = Joi.object({
	name: Joi.string().required(),
	login: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
	birthDate: Joi.date().format("YYYY/MM/DD").required(),
	address: Joi.string().required(),
	phone: Joi.string()
		.pattern(/^\(?(\d{2})\) ?([9]{1})?(\d{4})-?(\d{4})$/)
		.required(),
})

const signUpSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default signUpSchema
