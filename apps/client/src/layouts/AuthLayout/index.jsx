import Logo from "../../assets/images/inovialogo.png"

import * as S from "./styles"

const AuthLayout = ({ children }) => {
	return (
		<S.Main>
			<S.Container>
				<img src={Logo} alt="logo" />
				{children}
			</S.Container>
		</S.Main>
	)
}

export default AuthLayout
