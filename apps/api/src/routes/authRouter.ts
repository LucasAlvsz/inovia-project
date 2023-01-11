import { Router } from "express"

import { multerUtils } from "@/utils"
import { authSchemas } from "@/schemas"
import { authController } from "@/controllers"
import { validateSchema, handleFiles } from "@/middlewares"

const authRouter = Router()

authRouter.post(
	"/sign-up",
	handleFiles(multerUtils.profilePicOptions, "profilePic"),
	validateSchema(authSchemas.signUpSchema),
	authController.signUp
)

export default authRouter
