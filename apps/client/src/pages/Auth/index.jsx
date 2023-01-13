import { useLocation } from "react-router-dom"
import AuthLayout from "../../layouts/AuthLayout"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

const Auth = () => {
	const location = useLocation()

	return (
		<AuthLayout>
			{location.pathname === "/sign-in" ? <SignIn /> : <SignUp />}
		</AuthLayout>
	)
}

export default Auth
