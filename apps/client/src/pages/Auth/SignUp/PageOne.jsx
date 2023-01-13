import * as S from "../styles"

const PageOne = ({
	isLoading,
	form,
	handleForm,
	formRef,
	isPasswordVisible,
	setIsPasswordVisible,
}) => {
	return (
		<>
			<input
				type="text"
				name="name"
				required
				placeholder="Nome"
				value={form.name}
				disabled={isLoading}
				onChange={e => {
					e.target.value = e.target.value.replace(/[0-9]/g, "")
					handleForm(e)
				}}
			/>
			<input
				type="text"
				name="login"
				required
				placeholder="Login"
				value={form.login}
				disabled={isLoading}
				onChange={handleForm}
			/>
			<input
				type="email"
				name="email"
				required
				placeholder="Email"
				value={form.email}
				pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
				disabled={isLoading}
				onChange={handleForm}
			/>

			<span>
				<input
					type={isPasswordVisible ? "text" : "password"}
					name="password"
					required
					placeholder="Senha"
					value={form.password}
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
			<input
				type={isPasswordVisible ? "text" : "password"}
				name="confirmPassword"
				required
				placeholder="Confirme a senha"
				value={form.confirmPassword}
				disabled={isLoading}
				onChange={e => {
					handleForm(e)
					if (e.target.value !== form.password) {
						e.target.setCustomValidity("Senhas não conferem")
						formRef.current.reportValidity()
					} else {
						e.target.setCustomValidity("")
					}
				}}
			/>
		</>
	)
}

export default PageOne
