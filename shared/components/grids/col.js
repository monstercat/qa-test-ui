import "./_col.less"
import React from "react"
import PropTypes from 'prop-types'
import cx from 'classnames'
import {getSizes} from './utils'

export const ColHOC = (WrappedComponent) => class extends React.Component {
	static displayName = `ColHOC(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`
	render() {
		const {
			colSize,
			...rest
		} = this.props

		return (
			<Col colSize={colSize}>
				<WrappedComponent
					{...rest}
				/>
			</Col>
		)
	}
}

class Col extends React.Component {

	render() {
		const {colSize, className, children, ...rest} = this.props

		return (
			<div className={cx(getSizes(colSize), className)} {...rest}>
				{children}
			</div>
		)
	}
}

Col.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
}

Col.defaultProps = {
	colSize: "12"
}

export default Col
