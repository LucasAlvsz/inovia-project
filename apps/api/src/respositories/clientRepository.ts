import prisma from "@/config"
import { ClientData } from "@/types/clientTypes"

const create = async (client: ClientData) => {
	return await prisma.client.create({
		data: client,
	})
}

export default {
	create,
}
