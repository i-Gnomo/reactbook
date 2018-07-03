'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*react版本16以后弃用了React.createClass方法*/
// var Logo = React.createClass({
// 	render: function(){
// 		console.log('hahahahahahhaahhahahahahaha');
// 		var greeting = [<span key="hello">Hello</span>,' ',<span key="world">world</span>,'!'];
// 		return <div><a className="Logo" />Welcome to the App!<p className="greeting" style={{paddingLeft:'40px'}}>{greeting}</p></div>;
// 	}
// })
var Logo = function (_React$Component) {
	_inherits(Logo, _React$Component);

	function Logo() {
		_classCallCheck(this, Logo);

		return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
	}

	_createClass(Logo, [{
		key: 'render',
		value: function render() {
			function Person(name) {
				this.name = name;
			}
			// var a = Person('a');
			// var b = new Person('b');
			// var c = Person; 
			// console.log(a.name);
			// console.log(b.name);
			// console.log(c.name);

			var greeting = [_react2.default.createElement(
				'span',
				{ key: 'hello' },
				'Hello'
			), ' ', _react2.default.createElement(
				'span',
				{ key: 'world' },
				'world'
			), '!'];
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('a', { className: 'Logo' }),
				'Welcome to the App!',
				_react2.default.createElement(
					'p',
					{ className: 'greeting', style: { paddingLeft: '40px' } },
					greeting
				)
			);
		}
	}]);

	return Logo;
}(_react2.default.Component);

exports.default = Logo;