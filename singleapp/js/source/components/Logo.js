import React from 'react';

// var Logo = React.createClass({
// 	render: function(){
// 		return <div className="Logo" />;
// 	}
// })
	class Logo extends React.Component {
		render() {
			function Person(name){
				this.name = name;
			} 
			// var a = Person('a');
			// var b = new Person('b');
			// var c = Person; 
			// console.log(a.name);
			// console.log(b.name);
			// console.log(c.name);
						
			var greeting = [<span key="hello">Hello</span>,' ',<span key="world">world</span>,'!'];
			return <div><a className="Logo" />Welcome to the App!<p className="greeting" style={{paddingLeft:'40px'}}>{greeting}</p></div>;
		}
	}

export default Logo