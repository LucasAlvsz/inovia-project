const PageTwo = ({ isLoading, form, handleForm, picPreview }) => {
	return (
		<>
			{/* <input
				type="file"
				name="profilePic"
				id="imageUpload"
				required
				accept=".jpg, .jpeg, .png"
				disabled={isLoading}
				onChange={handleForm}
			/>
			<label for="imageUpload"></label> */}
			<input
				type="text"
				name="address"
				required
				placeholder="Endereço"
				value={form.address}
				disabled={isLoading}
				onChange={handleForm}
			/>
			<input
				type="text"
				name="phone"
				required
				placeholder="Telefone"
				maxLength="15"
				value={form.phone}
				disabled={isLoading}
				onChange={e => {
					e.target.value = e.target.value.replace(/[^0-9]/g, "")
					e.target.value = e.target.value.replace(
						/(\d{2})(\d)/,
						"($1) $2"
					)
					e.target.value = e.target.value.replace(
						/(\d{5})(\d)/,
						"$1-$2"
					)
					handleForm(e)
				}}
			/>
			<input
				type="text"
				name="birthDate"
				required
				placeholder="Data de nascimento (01/01/2001)"
				value={form.birthDate}
				disabled={isLoading}
				maxLength="10"
				onChange={e => {
					e.target.value = e.target.value.replace(/[^0-9]/g, "")
					e.target.value = e.target.value.replace(
						/(\d{2})(\d{2})(\d{4})/,
						"$1/$2/$3"
					)
					handleForm(e)
				}}
			/>
		</>
	)
}

export default PageTwo
