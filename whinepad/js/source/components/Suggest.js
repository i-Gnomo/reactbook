import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Suggest extends Component{
	// getValue(){
	// 	return this.refs.lowlevelinput.value;
	// }
	constructor(props){
		super(props);
		this.state = {
			value: props.defaultVaule
		}
	}
	getValue(){
		return this.state.value;
	}
	render(){
		const suggid = Math.random().toString(16).substring(2);
		return (
			<div>
				<input className={classNames('Suggest',this.props.className)} list={suggid} onChange={e => this.setState({value: e.target.value})} id={this.props.id} />
				<datalist id={suggid}>{
					this.props.options.map((item, idx)=> 
						<option value={item} key={idx}/>
					)
				}</datalist>
			</div>
		)
	}
}
Suggest.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string)
}
export default Suggest 