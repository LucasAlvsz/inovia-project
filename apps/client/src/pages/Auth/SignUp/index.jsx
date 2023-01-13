import { toast } from "react-toastify"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useForm } from "../../../hooks"
import { dateUtils } from "../../../utils"
import { authApi } from "../../../services"

import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import Loading from "../../../components/Loading"

import * as S from "./../styles"

const SignUp = () => {
	const navigate = useNavigate()
	const [form, , handleForm] = useForm()

	const formRef = useRef(null)
	const [page, setPage] = useState(1)
	const [isLoading, setIsLoading] = useState(false)
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setIsLoading(true)
		delete form.confirmPassword
		const formatedDate = dateUtils.formatDate(form.birthDate, "YYYY/MM/DD")
		const formatedUserData = {
			...form,
			birthDate: formatedDate,
		}
		authApi
			.signUp(formatedUserData)
			.then(() => {
				toast.success("Cadastro realizado com sucesso")
				navigate("/sign-in")
			})
			.catch(err => {
				console.log(err)
				err.response.status === 422 &&
					toast.error("Verifique os dados e tente novamente")
				err.response.status === 409 &&
					toast.error("O Email ou o Login já estão em uso")
			})
			.finally(() => setIsLoading(false))
	}
	return (
		<>
			<p>• Cadastro •</p>
			<S.Form onSubmit={handleSubmit} ref={formRef} isLoading={isLoading}>
				{page === 1 && (
					<PageOne
						isLoading={isLoading}
						form={form}
						handleForm={handleForm}
						formRef={formRef}
						isPasswordVisible={isPasswordVisible}
						setIsPasswordVisible={setIsPasswordVisible}
					/>
				)}

				{page === 2 && (
					<PageTwo
						isLoading={isLoading}
						form={form}
						handleForm={handleForm}
					/>
				)}

				{page === 2 && (
					<span>
						<button
							disabled={isLoading}
							onClick={() => setPage(page - 1)}
						>
							Voltar
						</button>
						<button
							disabled={isLoading}
							onClick={e => {
								if (!formRef.current?.reportValidity()) {
									formRef.current?.reportValidity()
									return
								}
								handleSubmit(e)
							}}
						>
							{isLoading ? <Loading /> : "Cadastrar"}
						</button>
					</span>
				)}
				{page === 1 && (
					<button
						disabled={isLoading}
						onClick={() => {
							if (formRef.current?.reportValidity()) {
								setPage(page + 1)
								return
							}
						}}
					>
						Próximo
					</button>
				)}
			</S.Form>
			<S.StyledLink to="/sign-in" isLoading={isLoading}>
				Já é um ususário? Faça login
			</S.StyledLink>
		</>
	)
}

export default SignUp
