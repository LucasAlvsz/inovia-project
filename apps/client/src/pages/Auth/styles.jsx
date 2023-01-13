import styled from "styled-components"
import { Link } from "react-router-dom"
import { Eye } from "@styled-icons/heroicons-solid/"
import { EyeOff } from "@styled-icons/evaicons-solid/EyeOff"

export const ShowPassword = styled(Eye)``

export const HidePassword = styled(EyeOff)``

export const Form = styled.form`
	width: 100%;
	max-width: 40rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	> span {
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;
	}

	input {
		width: 100%;
		height: 5rem;
		padding: 2rem;
		border: 1px solid #ccc;
		border-radius: 0.5rem;
		font-size: 1.6rem;
		color: #333;
		:focus {
			outline: none;
			box-shadow: 0 0 0 1px #ccc;
		}
		::placeholder {
			color: #ccc;
		}
		:disabled {
			opacity: 0.5;
			cursor: wait;
			border: none;
		}
	}
	input[type="file"] {
		display: none;
	}
	label {
		display: inline-block;
		width: 10rem;
		height: 10rem;
		margin-bottom: 1rem;
		border-radius: 100%;
		border: 5px solid #fff;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
		cursor: pointer;
		font-weight: normal;
		transition: all 0.2s ease-in-out;
		background-image: url("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	span {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	button {
		width: 70%;
		height: 5rem;
		border: 0;
		border-radius: 0.5rem;
		font-size: 1.6rem;
		font-weight: bold;
		color: #fff;
		background-color: ${props => props.theme.colors["blue-200"]};
		cursor: pointer;
		margin-top: 1rem;

		:hover {
			${props => {
				if (props.isLoading) return
				else
					`
			transition: all 0.2;
			transform: scale(1.01);
			filter: brightness(1.1);`
			}}
		}

		:disabled {
			opacity: 0.5;
			cursor: wait;
		}
		> img {
			width: 5rem;
			height: 5rem;
			margin-left: 1rem;
		}
	}

	${ShowPassword}, ${HidePassword} {
		width: 3rem;
		position: absolute;
		right: 1rem;
		cursor: pointer;
		color: ${props => props.theme.colors["gray-200"]};
		${props => {
			if (props.isLoading)
				return `
                cursor: wait; opacity: 0.5;
                pointer-events: none;
                `
		}}

		:hover {
			${props => {
				if (props.isLoading) return
				else {
					return `color: ${props =>
						props.theme.colors["hover-gray-200"]};`
				}
			}}
		}
	}
`

export const StyledLink = styled(Link)`
	width: 100%;
	max-width: 40rem;
	text-align: center;
	font-size: 1.4rem;
	color: ${props => props.theme.colors.white};
	text-decoration: none;
	margin-top: 2rem;
	text-decoration: underline;
	${props => {
		if (props.isLoading)
			return `cursor: not-allowed;
            opacity: 0.5;`
	}}

	:hover {
		${props => {
			if (props.isLoading) return
			else return `color: ${props => props.theme.colors["hover-white"]};`
		}}
	}
`
