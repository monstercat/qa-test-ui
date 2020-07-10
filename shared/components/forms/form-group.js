import "./_form-group.less"
import React, {Fragment} from "react"
import cx from 'classnames'
import {Errors, getError} from '~/shared/components/forms/status'
import Col from '../grids/col'
import {getSizes} from "../grids/utils"


export function FormGroupWrap(Component) {

	return (props) => {
		const {
			containerClassName,
			label,
			labelColSize,
			inputColSize,
			...rest
		} = props

		return (
			<FormGroup
				className={containerClassName}
				label={label}
				labelColSize={labelColSize}
				inputColSize={inputColSize}
				{...rest}
			>
				<Component
					{...rest}
				/>
			</FormGroup>
		)
	}
}

class FormGroup extends React.Component {

	renderCheckBoxFormContent = (err) => {
		const {
			name,
			children,
			labelClassName,
			helperText,
			readOnly,
		} = this.props

		return (
			<Fragment>
				<label className={cx("fancy-checkbox color-purple", labelClassName)} htmlFor={name}>
					{children}
					<span>{this.getLabel()}</span>
				</label>
				{err && (<div className="error-msg">{err}</div>)}
				{!readOnly && helperText && (<div className="helper-text">{helperText}</div>)}
			</Fragment>
		)
	}

	renderStandardFormContent = (err) => {
		let {
			name,
			noLabel,
			labelColSize,
			helperText,
			inputColSize,
			inline,
			children,
			readOnly,
		} = this.props

		if (noLabel) {
			labelColSize = 0
			inputColSize = 12
		}

		const inlineRendering = (
			<Fragment>
				<label htmlFor={name} className={cx("col-form-label", getSizes(labelColSize))}>
					{this.getLabel()}
				</label>
				<Col colSize={inputColSize}>
					{children}
					{err && (<div className="error-msg">{err}</div>)}
					{!readOnly && helperText && (<div className="helper-text">{helperText}</div>)}
				</Col>
			</Fragment>
		)
		const rowRendering = (
			<Fragment>
				{!noLabel &&
					<Fragment>
						<label htmlFor={name}>
							{this.getLabel()}
						</label>
						{children}
					</Fragment>
				}

				{noLabel &&
					<div className="position-relative">
						{children}
					</div>
				}

				{err && (<div className="error-msg">{err}</div>)}
				{!readOnly && helperText && (<div className="helper-text">{helperText}</div>)}
			</Fragment>
		)

		return (inline) ? inlineRendering : rowRendering
	}

	getLabel = () => {
		const {label, name, noLabel} = this.props
		if (noLabel) return ""
		if (!label && !name) return ""
		return label || name.substr(0, 1).toUpperCase() + name.substr(1, name.length)
	}

	render() {
		const {className, name, inline, type, colSize, status} = this.props
		const isCheckbox = (type === "checkbox" || type === "radio")

		let err = null

		if (status && status.msg && status.msg instanceof Errors) {
			err = getError(status, name)
		}

		const formGroupClasses = {
			"form-group": !isCheckbox,
			"form-check": isCheckbox,
			"danger": err,
			"row": inline
		}

		return (
			<div className={cx(formGroupClasses, getSizes(colSize), className)}>
				{!isCheckbox && this.renderStandardFormContent(err)}
				{isCheckbox && this.renderCheckBoxFormContent(err)}
			</div>
		)
	}
}

FormGroup.defaultProps = {
	type: "input",
	labelColSize: "md-2",
	inputColSize: "md-10",
	noLabel: false
}

export default FormGroup
