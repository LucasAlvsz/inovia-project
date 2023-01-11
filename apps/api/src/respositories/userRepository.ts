import prisma from "@/config"
import { UserData } from "@/types/userTypes"

const create = async (user: UserData) => {
	return await prisma.user.create({
		data: user,
	})
}

export default {
	create,
}
