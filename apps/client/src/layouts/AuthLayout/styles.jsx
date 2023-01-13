import styled from "styled-components"

export const Main = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: ${props => props.theme.colors["blue-300"]};
	padding: 0 2rem;
`

export const Container = styled.div`
	width: 100%;
	margin: 9rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	> img {
		width: 20rem;
		margin-bottom: 2rem;
	}
	> p {
		margin-bottom: 2rem;
		font-size: 1.3rem;
		color: #fff;
	}
`
