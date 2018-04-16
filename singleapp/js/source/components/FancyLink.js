import React from 'react';

	class FancyLink extends React.Component{
		render() {
			// var ab = "12312";
			// console.log(this.props.attrType);
			switch(this.props.attrType){
				case 'button':
					//基于attrType进行一些处理
				break;
			}
			var attribs = Object.assign({},this.props);
			delete attribs.attrType;
			console.log(attribs);
			return <a {...attribs}>{this.props.children}</a>;
		}
	} 

export default FancyLink