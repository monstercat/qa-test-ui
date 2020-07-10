import delay from "~/shared/utils/delay"

function createError(status, message) {
	return createResponse(status, {message})
}

function createResponse(status, data) {
	return {
		status,
		data
	}
}


const Routes = {
	"GET": {
		"/me": async () => {
			const loggedIn = localStorage.getItem("logged-in")
			if (loggedIn) {
				return createResponse(200, {
					Email: "email@monstercat.com"
				})
			}
			throw createError(403)
		},
	},
	"POST": {
		"/login": async (payload) => {
			await delay(Math.floor(Math.random() * 1000) + 500)

			const {
				Email,
				Password
			} = payload || {}
			
			if (!Email || !Password) throw createError(400, "Invalid email or password")
			if (Email !== "email@monstercat.com" && Password !== "123") {
				throw createError(400, "Invalid email or password")
			}
			localStorage.setItem("logged-in", "true")
			return createResponse(200)
		},
		"/logout": async (payload) => {
			localStorage.setItem("logged-in", "")
			return createResponse(200)
		}
	}
}

function getRoute(method, url) {
	if (method in Routes) {
		return Routes[method][url]
	}
}

export default async function call(method, url, payload) {
	const route = getRoute(method, url)
	if (!route) throw createError(404, "Not Found")
	return await route(payload)
}