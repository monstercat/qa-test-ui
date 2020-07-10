import delay from "~/shared/utils/delay"

const LoginApi = {
	async LogUser(data = {}) {
		await delay(2000)

		if (!(data.Login || "").trim()) return Promise.reject("Login was not sent")
		if (!(data.Password || "").trim()) return Promise.reject("Password was not sent")

		if (data.Login === "email@monstercat.com" && data.Password === "123") {
			return Promise.resolve("User is Logged")
		}

		return Promise.reject("Login or password are incorrect")
	}
}

export default LoginApi