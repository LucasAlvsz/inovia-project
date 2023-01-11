import { Prisma, User } from "@prisma/client"

import { queryFactory } from "@/factories"
import { UserData } from "@/types/userTypes"
import { userRepository } from "@/respositories"
import { TOKEN_EXPIRATION } from "./magicNumbers"
import { cryptographyUtils, jwtUtils } from "@/utils"
import { ConflictError, NotFoundError, UnauthorizedError } from "@/errors"

const validateUser = async (
	where: Prisma.UserWhereInput
): Promise<User | null> => {
	const user = await queryFactory.findFirst(where, "User")
	if (!user) return null
	return user
}

const register = async (user: UserData) => {
	const userAlreadyExists = await validateUser({
		OR: [{ login: user.login }, { email: user.email }],
	})
	if (userAlreadyExists) throw new ConflictError("user already exists")

	const UserData = {
		...user,
		birthDate: new Date(user.birthDate),
		password: cryptographyUtils.encryptWithSalt(user.password),
	}

	await userRepository.create(UserData)
}

const login = async (user: UserData) => {
	const userAlreadyExists = await validateUser({ login: user.login })
	if (!userAlreadyExists) throw new NotFoundError("user not found")

	const validatePassword = cryptographyUtils.decryptAndcompare(
		user.password,
		userAlreadyExists.password
	)
	if (!validatePassword) throw new UnauthorizedError("Invalid password")

	const { id, name } = userAlreadyExists
	return {
		token: jwtUtils.generateToken({ id, name }, TOKEN_EXPIRATION),
	}
}

export default {
	validateUser,
	register,
	login,
}
