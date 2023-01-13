import styled from "styled-components"
import { LogOut } from "@styled-icons/boxicons-regular/LogOut"
export const StyledHeader = styled.header`
	width: 100%;
	height: 7rem;
	position: absolute;
	z-index: 2;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.6rem 2rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	background-color: ${props => props.theme.colors["blue-300"]};
`

export const Logo = styled.img`
	height: 5rem;
	object-fit: cover;
`

export const StyledLogout = styled(LogOut)`
	width: 4rem;
	height: 4rem;
	color: ${({ theme }) => theme.colors.white};
	margin-left: 5px;
	cursor: pointer;
`

export const Options = styled.div`
	display: flex;
	gap: 25px;
`

export const Option = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	:hover {
		text-decoration: underline;
		transition: 0.3s;
		transform: scale(1.1);
		> p,
		h3 {
			color: ${({ theme }) => theme.colors.primaryBlue};
		}
	}
`
