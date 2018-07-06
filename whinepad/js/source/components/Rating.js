import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Rating extends Component{
	constructor(props){
		super(props);
		/*组件状态值*/
		this.state = {
			rating: props.defaultValue, /*实际星星分值*/
			tmprating: props.defaultValue /*鼠标移动到星星组件上时临时值*/
		}
	}

	getValue(){
		return this.state.rating;
	}

	setTemp(rating){
		this.setState({tmprating: rating});
	}

	setRating(rating){
		this.setState({
			rating: rating,
			tmprating: rating
		});
	}

	resetRating(){
		this.setTemp(this.state.rating);
	}

	componentWillReceiveProps(nextProps){
		this.setRating(nextProps.defaultValue);
	}

	render(){
		const stars = [];
		for(let i = 1; i<=this.props.max; i++){
			stars.push(<span
					className = {i<=this.state.tmprating? "RatingOn":null}
					key={i}
					onClick = {!this.props.readonly? this.setRating.bind(this, i): undefined}
					onMouseOver = {!this.props.readonly? this.setTemp.bind(this, i): undefined}
				>
				{/*&#9734;*/}
				</span>);
		}
		return (
			<div className={classNames({
					'Rating': true,
	 				'RatingReadonly': this.props.readonly, 
				})}
				onMouseOut={this.resetRating.bind(this)}
			>
			{stars}
			{this.props.readonly || !this.props.id
				? null
				: <input type="hidden" id={this.props.id} value={this.state.rating} />
			}
			</div>
		)
	}
}

/*定义组件属性数值类型*/
Rating.propTypes = {
	defaultValue: PropTypes.number, /*星星数初始值*/
	readonly: PropTypes.bool, /*星星组件是否可读*/
	max: PropTypes.number /*星星数量*/
}

/*初始属性值*/
Rating.defaultProps = {
	defaultValue: 0,
	max: 5
}

export default Rating