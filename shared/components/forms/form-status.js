import {STATUSES} from "~/shared/utils/statuses"
import Alert from "../alerts/alert"
import {Fragment} from "react"

export default function FormStatus({
	status = {}
}) {

	if (!status.Message) return <Fragment />

	if (!status.Message || status.Message === STATUSES.READY || status.Message === STATUSES.LOADING) return <Fragment />

	return (
		<Alert status={status.Message}>
			{status.Response}
		</Alert>
	)
}