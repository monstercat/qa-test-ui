import "./_buttons.less"
import React, {useState, useEffect} from "react"
import cx from 'classnames'
import {LoadingIcon} from "../icons/loading-icon"


export default function Button({
	type = "submit",
	className = "btn-default",
	children,
	staticWidth = false,
	loading,
	disabled,
	...rest
}) {
	let buttonEl = React.useRef(null)

	const [width, setWidth] = useState("auto")
	const [height, setHeight] = useState("auto")

	const setBtnSizes = () => {
		if (!buttonEl || !buttonEl.current) return {width: 'auto', height: 'auto'}

		const el = buttonEl.current
		const w = el.clientWidth + 2
		const h = el.clientHeight + 2

		setWidth(w)
		setHeight(h)
	}

	useEffect(() => {
		setBtnSizes()
	}, [staticWidth])

	let style = {}
	if (staticWidth) {
		style = {
			width: width !== "" ? `${width}px` : width,
			height: height !== "" ? `${height}px` : height
		}
	}

	return (
		<button
			type={type}
			ref={buttonEl}
			style={style}
			className={cx("btn", className)}
			disabled={loading || disabled}
			{...rest}
		>
			{children}
			{loading &&
				<LoadingIcon />
			}
		</button>
	)
}
