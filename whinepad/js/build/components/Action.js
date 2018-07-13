'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*无状态组件函数式组件 可以用箭头函数定义 */
var Actions = function Actions(props) {
    return _react2.default.createElement(
        'div',
        { className: 'Actions' },
        _react2.default.createElement(
            'span',
            {
                className: 'ActionsInfo',
                tabIndex: '0',
                title: 'More info',
                onclick: props.onAction.bind(null, 'info') },
            '\u2139'
        ),
        _react2.default.createElement(
            'span',
            {
                className: 'ActionsEdit',
                tabIndex: '0',
                title: 'Edit',
                onclick: props.onAction.bind(null, 'info') },
            '\u2710'
        ),
        _react2.default.createElement(
            'span',
            {
                className: 'ActionsDelete',
                tabIndex: '0',
                title: 'Delete',
                onclick: props.onAction.bind(null, 'info') },
            'x'
        )
    );
};

Actions.propTypes = {
    onAction: _propTypes2.default.func
};

Actions.defaultProps = {
    onAction: function onAction() {}
};

exports.default = Actions;