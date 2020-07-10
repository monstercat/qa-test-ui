import "./_row.less"
import React from "react"
import PropTypes from 'prop-types'
import cx from 'classnames'

class Row extends React.Component {

	render() {
		const {className, children, ...rest} = this.props

		return (
			<div className={cx("row", className)} {...rest}>
				{children}
			</div>
		)
	}
}

Row.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
}

export default Row