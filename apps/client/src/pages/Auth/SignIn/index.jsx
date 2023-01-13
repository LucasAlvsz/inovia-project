import { toast } from "react-toastify"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useForm } from "../../../hooks"
import { authApi } from "../../../services"
import { AuthContext } from "../../../providers/AuthProvider"

import Loading from "../../../components/Loading"

import * as S from "./../styles"

const SignIn = () => {
	const navigate = useNavigate()
	const [form, , handleForm] = useForm()
	const { setToken } = useContext(AuthContext)

	const [isLoading, setIsLoading] = useState(false)
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setIsLoading(true)
		authApi
			.signIn(form)
			.then(({ data }) => {
				console.log(data)
				toast.success("Login realizado com sucesso")
				setToken(data.token)
				navigate("/home")
			})
			.catch(err => {
				console.log(err)
				err.response.status === 401 && toast.error("Senha incorreta")
				err.response.status === 404 &&
					toast.error("Usuário não encontrado")
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<>
			<p>• Login •</p>
			<S.Form onSubmit={handleSubmit} isLoading={isLoading}>
				<input
					type="text"
					name="login"
					required
					placeholder="Login"
					disabled={isLoading}
					onChange={handleForm}
				/>
				<span>
					<input
						type={isPasswordVisible ? "text" : "password"}
						name="password"
						required
						placeholder="Senha"
						disabled={isLoading}
						onChange={handleForm}
					/>
					{isPasswordVisible ? (
						<S.HidePassword
							onClick={() => setIsPasswordVisible(false)}
						/>
					) : (
						<S.ShowPassword
							onClick={() => setIsPasswordVisible(true)}
						/>
					)}
				</span>
				<button type="submit" disabled={isLoading}>
					{isLoading ? <Loading /> : "Entrar"}
				</button>
			</S.Form>
			<S.StyledLink to="/sign-up" isLoading={isLoading}>
				Ainda não tem uma conta? Cadastre-se
			</S.StyledLink>
		</>
	)
}

export default SignIn
