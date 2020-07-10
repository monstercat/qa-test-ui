import {useState, useCallback} from "react"
import {STATUSES} from "~/shared/utils/statuses"
import delay from "~/shared/utils/delay"

export default function useForm({
	submitFn,
}) {
	const [status, setStatus] = useState({
		Message: STATUSES.READY,
		Response: null
	})

	const [data, setData] = useState({
		Login: "",
		Password: "",
	})

	const setFormField = (field, value) => {
		setData({
			...data,
			[field]: value
		})
	}

	const submit = useCallback(async () => {
		setStatus({
			Message: STATUSES.LOADING,
			Response: null,
		})

		try {
			const resp = await submitFn(data)

			setStatus({
				Message: STATUSES.SUCCESS,
				Response: resp,
			})
		} catch (err) {
			setStatus({
				Message: STATUSES.ERROR,
				Response: err.data.message
			})
			return
		}

		await delay(300)

		setStatus({
			...status,
			Message: STATUSES.READY,
		})
	}, [submitFn, data])

	const reset = useCallback((resetValues) => {
		setStatus({
			Message: STATUSES.READY,
			Response: null
		})
		setData(resetValues)
	}, [])

	return {
		status,
		setStatus,
		data,
		setData,
		setFormField,
		submit,
		reset
	}
}