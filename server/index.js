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

			// Randomly, server will go down.
			const goDown = Math.random()
			if (goDown < 0.6) throw ""

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
	try{
		const route = getRoute(method, url)
		if (!route) throw createError(404, "Not Found")
		const resp = await route(payload)
		console.log('[Mock Server]', method, url, 200, resp)
		return resp
	}catch (err) {
		if (!err) {
			console.log('[Mock Server]', method, url, 500, err)
		} else {
			console.log('[Mock Server]', method, url, err.status, err)
		}
		throw err
	}
}