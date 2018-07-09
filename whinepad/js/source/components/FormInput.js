import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Suggest from './Suggest';
import Rating from './Rating';

class FormInput extends Component{
	getValue(){
		return 'value' in this.refs.input
				? this.refs.input.value
				: this.refs.input.getValue();
	}
	render(){
		const common = {
			id: this.props.id,
			ref: 'input',
			defaultValue: this.props.defaultValue
		}
		switch(this.props.type){
			case 'year':
				return (<input 
						{...common} 
						type="number" 
						defaultValue={this.props.defaultValue || new Date().getFullYear()} 
					/>);
			break;
			case 'rating':
				return (<Rating {...common} max={10} defaultValue={parseInt(this.props.defaultValue, 10)} />);
			break;
			case 'suggest':
				return (<Suggest {...common} options={this.props.options}/>)
			break;
			case 'text':
				return (<textarea {...common} />);
			break;
			default:
				return (<input {...common} type="text" />)
		}
	}

}

FormInput.propTypes = {
	id: PropTypes.string,
	type: PropTypes.oneOf(['input', 'year', 'rating', 'suggest', 'text']),
	options: PropTypes.array,
	defaultValue: PropTypes.any
}


export default FormInput