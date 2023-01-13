import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Router from "./Router"
import AppProvider from "./providers"
import GlobalStyles from "./GlobalStyles"

const App = () => {
	return (
		<AppProvider>
			<GlobalStyles />
			<Router />
			<ToastContainer />
		</AppProvider>
	)
}

export default App
