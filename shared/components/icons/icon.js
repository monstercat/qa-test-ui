import React from "react"
import cx from "classnames"


function Icon(props) {
	const {
		className,
		suffix,
		family,
		...rest
	} = props

	return (
		<i
			className={cx(family, `${family}-${props.suffix}`, className)}
			{...rest}
		/>
	)
}

Icon.defaultProps = {
	family: "fa"
}

export default Icon