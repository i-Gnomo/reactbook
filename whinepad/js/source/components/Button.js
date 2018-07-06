import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// class Button extends Component {
// 	render() {
// 		var attribs = Object.assign({},this.props);
// 		const cssclasses = classNames('Button', this.props.className);
// 		return this.props.href? <a {...attribs} className={cssclasses}></a>:<button {...attribs} className={cssclasses}></button>;
// 	}
// }

//无状态函数式组件
const Button = props => {
	return props.href? <a {...props} className={classNames('Button', props.className)} />:<button {...props} className={classNames('Button', props.className)} />;
}


Button.propTypes = {
	href: PropTypes.string
}

export default Button