import { queryFactory } from "@/factories"
import { clientRepository } from "@/respositories"
import { ClientData } from "@/types/clientTypes"
import { ConflictError } from "@/errors"
import { Prisma } from "@prisma/client"
import { cryptographyUtils } from "@/utils"

const registerClient = async (client: ClientData) => {
	if (
		await validateClient({
			login_email: { login: client.login, email: client.email },
		})
	)
		throw new ConflictError("Client already exists")

	const clientData = {
		...client,
		birthDate: new Date(client.birthDate),
		password: cryptographyUtils.encryptWithSalt(client.password),
	}

	await clientRepository.create(clientData)
}

const validateClient = async (getBy: Prisma.ClientWhereUniqueInput) => {
	const client = await queryFactory.getByUnique(getBy, "Client")
	if (!client) return null
	return client
}

export default {
	registerClient,
	validateClient,
}
