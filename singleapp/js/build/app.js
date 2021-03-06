'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _FancyLink = require('./components/FancyLink');

var _FancyLink2 = _interopRequireDefault(_FancyLink);

var _Video = require('./components/Video');

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
	'div',
	null,
	_react2.default.createElement(_Logo2.default, null),
	_react2.default.createElement(
		_FancyLink2.default,
		{
			href: 'mqqwpa://im/chat?chat_type=wpa&uin=4006390520&version=1&src_type=web&web_src=bjhuli.com',
			target: '_blank',
			className: 'a-link',
			style: { textDecoration: 'none', paddingLeft: '40px', fontSize: '14px' },
			attrType: 'button' },
		_react2.default.createElement(
			'span',
			null,
			'click me'
		)
	),
	_react2.default.createElement(_Video2.default, { style: { width: '300px', height: '200px' }, videosrc: 'images/video.mp4' })
), document.getElementById('app'));