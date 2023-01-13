import { useState } from "react"

const useForm = (initState = {}) => {
	const [form, setForm] = useState(initState)
	const handleForm = ({ target: { value, name } }) =>
		setForm({ ...form, [name]: value })
	const resetForm = () => setForm(initState)

	return [form, setForm, handleForm, resetForm]
}

export default useForm
