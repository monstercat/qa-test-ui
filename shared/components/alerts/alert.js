import "./_alerts.less"
import cx from "classnames"

export default function Alert({
	status = "info",
	children,
	classNames
}) {

	return (
		<p className={cx(`alert alert-${status}`, classNames)}>
			{children}
		</p>
	)
}