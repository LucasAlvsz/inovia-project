import { ThemeProvider } from "styled-components"

const Theme = ({ children }) => {
	const breakpoints = {
		mobile: "480px",
		tablet: "768px",
		desktop: "1024px",
	}

	const colors = {
		"blue-300": "#13518b",
		"blue-200": "#3c69e4",
		white: "#fff",
		"gray-200": "#999",
		"hover-gray-200": "#333",
		"hover-white": "#ccc",
	}

	return (
		<ThemeProvider theme={{ breakpoints, colors }}>
			{children}
		</ThemeProvider>
	)
}

export default Theme
