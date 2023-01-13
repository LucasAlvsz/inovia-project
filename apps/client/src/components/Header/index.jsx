import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../providers/AuthProvider"

import logo from "../../assets/images/inovialogo.png"
import * as S from "./styles"

const Header = () => {
	const navigate = useNavigate()
	const { token, logout } = useContext(AuthContext)
	return (
		<S.StyledHeader>
			<S.Logo src={logo} alt="Inovia Logo" />
			<S.Options>
				<S.Option></S.Option>
				{token && (
					<S.Option
						onClick={() => {
							logout()
							navigate("/sign-in")
						}}
					>
						<S.StyledLogout />
					</S.Option>
				)}
			</S.Options>
		</S.StyledHeader>
	)
}

export default Header
