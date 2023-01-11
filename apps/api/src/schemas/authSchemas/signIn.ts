import Joi from "joi"

import { UserLogin } from "@/types/userTypes"

const bodySchema = Joi.object<UserLogin>({
	login: Joi.string().required(),
	password: Joi.string().required(),
})

const signInSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default signInSchema
