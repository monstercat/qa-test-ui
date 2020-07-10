import "./_card.less"
import cx from "classnames"

export default function Card({
	children,
	className
}) {
	return (
		<div className={cx("card", className)}>
			{children}
		</div>
	)
}