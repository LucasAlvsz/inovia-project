import { Router } from "express"

import { multerConfig } from "@/config"
import { authSchemas } from "@/schemas"
import { authController } from "@/controllers"
import { validateSchema, handleFiles } from "@/middlewares"

const authRouter = Router()

authRouter
	.post(
		"/sign-up",
		handleFiles(multerConfig.imageOptions, "profilePic"),
		validateSchema(authSchemas.signUpSchema),
		authController.signUp
	)
	.post(
		"/sign-in",
		validateSchema(authSchemas.signInSchema),
		authController.signIn
	)

export default authRouter
