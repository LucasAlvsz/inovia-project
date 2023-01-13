import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import Auth from "../pages/Auth"
import PrivateRoutes from "./PrivateRoutes"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Navigate to="/home" />} />
				<Route path="/sign-in" element={<Auth />} />
				<Route path="/sign-up" element={<Auth />} />

				<Route element={<PrivateRoutes />}>
					<Route path="/home" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
