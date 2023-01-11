import prisma from "@/config"
import { Prisma } from "@prisma/client"

const getByUnique = async (
	where: Prisma.ClientWhereUniqueInput,
	model: Prisma.ModelName
) => {
	return prisma[model].findUnique({
		where: where,
	})
}

export default { getByUnique }
