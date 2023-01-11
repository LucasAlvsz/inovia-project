import { Prisma } from "@prisma/client"

import { ConflictError } from "@/errors"
import { queryFactory } from "@/factories"
import { cryptographyUtils } from "@/utils"
import { UserData } from "@/types/userTypes"
import { userRepository } from "@/respositories"

const validateUser = async (getBy: Prisma.UserWhereUniqueInput) => {
	const user = await queryFactory.getByUnique(getBy, "User")
	if (!user) return null
	return user
}

const register = async (user: UserData) => {
	if (
		await validateUser({
			login_email: { login: user.login, email: user.email },
		})
	)
		throw new ConflictError("user already exists")

	const UserData = {
		...user,
		birthDate: new Date(user.birthDate),
		password: cryptographyUtils.encryptWithSalt(user.password),
	}

	await userRepository.create(UserData)
}

const login = async (user: UserData) => {}

export default {
	register,
	validateUser,
}
