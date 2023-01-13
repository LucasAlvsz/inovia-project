import ThemeProvider from "./ThemeProvider"
import { AuthProvider } from "./AuthProvider"

const AppProvider = ({ children }) => {
	return (
		<ThemeProvider>
			<AuthProvider>{children}</AuthProvider>
		</ThemeProvider>
	)
}

export default AppProvider
