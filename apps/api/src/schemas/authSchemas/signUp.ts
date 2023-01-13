import Joibase from "joi"
import JoiDate from "@joi/date"

import { DATE_FORMAT, PHONE_PATTERN } from "./utils"

const Joi = Joibase.extend(JoiDate)

const bodySchema = Joi.object({
	name: Joi.string().required(),
	login: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
	birthDate: Joi.date().format(DATE_FORMAT).required(),
	address: Joi.string().required(),
	phone: Joi.string().pattern(PHONE_PATTERN).required(),
}).options({ allowUnknown: false })

const signUpSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default signUpSchema
