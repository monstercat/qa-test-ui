import call from "~/server"

const LoginApi = {
	async LogUser(data = {}) {
		await call("POST", "/login", {Email: data.Login, Password: data.Password})
	},
	async Logout() {
		await call("POST", "/logout")
	}
}

export default LoginApi