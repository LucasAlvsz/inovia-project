import api from "./api"

const getOrders = token =>
	api.get("/order", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

export default { getOrders }
