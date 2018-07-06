'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rating = function (_Component) {
	_inherits(Rating, _Component);

	function Rating(props) {
		_classCallCheck(this, Rating);

		/*组件状态值*/
		var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

		_this.state = {
			rating: props.defaultValue, /*实际星星分值*/
			tmprating: props.defaultValue /*鼠标移动到星星组件上时临时值*/
		};
		return _this;
	}

	_createClass(Rating, [{
		key: 'getValue',
		value: function getValue() {
			return this.state.rating;
		}
	}, {
		key: 'setTemp',
		value: function setTemp(rating) {
			this.setState({ tmprating: rating });
		}
	}, {
		key: 'setRating',
		value: function setRating(rating) {
			this.setState({
				rating: rating,
				tmprating: rating
			});
		}
	}, {
		key: 'resetRating',
		value: function resetRating() {
			this.setTemp(this.state.rating);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setRating(nextProps.defaultValue);
		}
	}, {
		key: 'render',
		value: function render() {
			var stars = [];
			for (var i = 1; i <= this.props.max; i++) {
				stars.push(_react2.default.createElement('span', {
					className: i <= this.state.tmprating ? "RatingOn" : null,
					key: i,
					onClick: !this.props.readonly ? this.setRating.bind(this, i) : undefined,
					onMouseOver: !this.props.readonly ? this.setTemp.bind(this, i) : undefined
				}));
			}
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)({
						'Rating': true,
						'RatingReadonly': this.props.readonly
					}),
					onMouseOut: this.resetRating.bind(this)
				},
				stars,
				this.props.readonly || !this.props.id ? null : _react2.default.createElement('input', { type: 'hidden', id: this.props.id, value: this.state.rating })
			);
		}
	}]);

	return Rating;
}(_react.Component);

/*定义组件属性数值类型*/


Rating.propTypes = {
	defaultValue: _propTypes2.default.number, /*星星数初始值*/
	readonly: _propTypes2.default.bool, /*星星组件是否可读*/
	max: _propTypes2.default.number /*星星数量*/


	/*初始属性值*/
};Rating.defaultProps = {
	defaultValue: 0,
	max: 5
};

exports.default = Rating;