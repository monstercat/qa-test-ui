import "./_form-control.less"
import React, {Fragment, useState} from "react"
import cx from 'classnames'
import {FormGroupWrap} from './form-group'


export function TextInput(props) {

	if (props.inputType === "password") {
		return <PasswordInput {...props} />
	}

	const {
		className,
		children,
		disabled,
		placeholder,
		readOnly,
		inputType,
		hideLabel,
		noLabel,
		forwardedRef,
		inline,
		inputRef,
		//do not remove
		helperText,
		value = "",
		...rest
	} = props


	const inputProps = {...rest}
	delete inputProps.hideLabel
	delete inputProps.inline
	delete inputProps.show
	delete inputProps.hide
	delete inputProps.hideOnDayClick
	delete inputProps.noTime
	delete inputProps.tooltip
	delete inputProps.tooltipProps
	delete inputProps.colSize
	delete inputProps.inputColSize
	delete inputProps.labelColSize

	if (readOnly) {
		return (
			<Fragment>
				<div>{value}</div>
				{children}
			</Fragment>
		)
	}

	return (
		<Fragment>
			<input
				ref={inputRef}
				className={cx("form-control", className)}
				placeholder={placeholder}
				readOnly={disabled}
				value={value}
				{...inputProps}
			/>
			{children}
		</Fragment>
	)
}

const TextInputGroup = FormGroupWrap(TextInput)
export default TextInputGroup

export function PasswordInput(props) {

	const {
		placeholder,
		readOnly,
		type: _,
		inline,
		className,
		disabled,
		children,
		value = "",
		...rest
	} = props

	const [showPassword, setShowPassword] = useState(false)

	function toggleShowPassword() {
		setShowPassword(!showPassword)
	}

	const type = showPassword ? "text" : "password"

	const togglePwdBtnClasses = {
		"fa-eye": showPassword,
		"fa-eye-slash": !showPassword,
		"inline": inline,
	}

	const restProps = {...rest}
	delete restProps.hideLabel
	delete restProps.inline
	delete restProps.helperText
	delete restProps.inputType

	return (
		<Fragment>
			<a onClick={toggleShowPassword} className={cx("pwd-btn fa", togglePwdBtnClasses)} />
			<input
				type={type}
				className={cx("form-control", className)}
				placeholder={getPlaceholder(props)}
				readOnly={disabled}
				value={value}
				{...restProps}

			/>
			{children}
		</Fragment>
	)

}

TextInput.defaultProps = {
	type: 'text'
}