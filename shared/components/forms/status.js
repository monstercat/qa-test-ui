// Form statuses.
// -----------------------
//
// Form status uses an object to be able to provide errors.
// This will work properly with the <FormGroup /> type classes, and the <FormStatus /> class.

export class Errors {
	errors = {}
	hasError = false

	static create(msg = "", fieldName = "") {
		if (fieldName == "") fieldName = "*"

		let err = new Errors()
		return err.add(msg, fieldName)
	}

	add(msg, fieldName) {
		this.hasError = true
		if (!fieldName) {
			if (!this.errors["*"]) this.errors["*"] = []
			this.errors["*"].push(msg)
			return this
		}

		this.errors[fieldName] = msg
		return this
	}

	setErrors(errors) {
		this.errors = {...errors}
	}

	has(name) {
		return name in this.errors
	}

	get(name) {
		return this.errors[name]
	}

	fuzzyget(name) {
		for (let i in this.errors) {
			if (i.replace(/\[[0-9]+\]/g, "") === name) {
				return this.errors[i]
			}
		}
	}

	getAll() {
		return this.errors
	}
}


export const createError = (msg, errorType = "error") => ({
	msgType: errorType,
	error: true,
	msg
})

export const createMsg = (msg, msgType = "success", isError = false) => ({
	error: isError,
	msgType: msgType,
	msg
})

export const hasError = (status = {}, name = "") => {
	if (!name) return false
	if (!status.msg) return false
	return status.msg.has(name)
}

export const getError = (status = {}, name = "") => {
	if (!name) return false
	if (!status.msg) return false
	const msg = status.msg.get(name)
	if (msg) return msg

	// Due to the fact that default index is 0 and not -1
	return status.msg.fuzzyget(name)
}