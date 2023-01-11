import { Prisma } from "@prisma/client"

import prisma from "@/config"

const findFirst = async (
	where: Prisma.UserWhereInput,
	model: Prisma.ModelName
) => {
	return prisma[model].findFirst({
		where: where,
		take: 1,
	})
}

export default { findFirst }
