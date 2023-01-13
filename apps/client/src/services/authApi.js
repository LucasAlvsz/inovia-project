import api from "./api"

const signUp = async userData => api.post("/sign-up", userData)

const signIn = async loginData => api.post("/sign-in", loginData)

export default { signUp, signIn }
