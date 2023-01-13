import styled from "styled-components"

export const Main = styled.div`
	width: 100%;
	height: auto;
	margin-top: 8rem;
	background-color: ${({ theme }) => theme.colors.primaryBlue};
`

export const ShowcaseContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
	grid-gap: 2rem;
	padding: 0 1rem;
	background-color: #fff;
	margin-bottom: 3rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		border-radius: 0;
	}
`

export const LoadingContainer = styled.div`
	width: 10rem;
	position: absolute;
	left: 45%;
	img {
		width: 100%;
		height: 100%;
	}
`
