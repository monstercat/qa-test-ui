import "./_grids.less"
import React, {Fragment} from "react"
import PropTypes from 'prop-types'
import cx from 'classnames'

class Container extends React.Component {

	render() {
		const {className, children, ...rest} = this.props

		return (
			<Fragment>
				<div className={cx("content-container", className)} {...rest}>
					{children}
				</div>
			</Fragment>
		)


	}
}

Container.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
}

export default Container