import { Prisma } from "@prisma/client"

import prisma from "@/config"

const getByUnique = async (
	where: Prisma.UserWhereUniqueInput,
	model: Prisma.ModelName
) => {
	return prisma[model].findUnique({
		where: where,
	})
}

export default { getByUnique }
