import { Router } from "express"

import authController from "@/controllers/authController"
import { validateSchema, handleFiles } from "@/middlewares"
import signUpSchema from "@/schemas/authSchemas/signUp"
import { multerUtils } from "@/utils"

const authRouter = Router()

authRouter.post(
	"/sign-up",
	handleFiles(multerUtils.profilePicOptions, "profilePic"),
	validateSchema(signUpSchema),
	authController.signUp
)

export default authRouter
