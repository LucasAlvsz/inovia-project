import { useContext } from "react"
import { toast } from "react-toastify"
import { Navigate, Outlet } from "react-router-dom"

import { AuthContext } from "../../providers/AuthProvider"

const PrivateRoutes = () => {
	const { token } = useContext(AuthContext)
	return token ? (
		<Outlet />
	) : (
		toast.warning("Você precisa estar logado para acessar essa página") && (
			<Navigate to="/sign-in" />
		)
	)
}

export default PrivateRoutes
