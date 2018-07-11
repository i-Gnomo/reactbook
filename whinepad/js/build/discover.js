'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Suggest = require('./components/Suggest');

var _Suggest2 = _interopRequireDefault(_Suggest);

var _Rating = require('./components/Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _FormInput = require('./components/FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _Form = require('./components/Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
test-driven development TDD
 */

_reactDom2.default.render(_react2.default.createElement(
    'div',
    { style: { padding: "20px" } },
    _react2.default.createElement(
        'h1',
        null,
        ' Component discover '
    ),
    _react2.default.createElement(
        'h2',
        null,
        ' Logo '
    ),
    _react2.default.createElement(
        'div',
        { style: { display: "inline-block", background: "purple" } },
        _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement(
        'h2',
        null,
        ' Button '
    ),
    _react2.default.createElement(
        'div',
        null,
        ' Button with onCick\uFF1A',
        _react2.default.createElement(
            _Button2.default,
            { onClick: function onClick() {
                    return alert("hoho");
                } },
            ' Click me '
        )
    ),
    _react2.default.createElement(
        'div',
        null,
        ' A link:',
        _react2.default.createElement(
            _Button2.default,
            { href: 'http://react-china.org/', target: '_blank' },
            ' Follow me '
        )
    ),
    _react2.default.createElement(
        'div',
        null,
        ' Custom class name: ',
        _react2.default.createElement(
            _Button2.default,
            { className: 'custom' },
            ' I do nothing '
        )
    ),
    _react2.default.createElement(
        'h2',
        null,
        ' Suggest '
    ),
    _react2.default.createElement(
        'div',
        null,
        ' Suggest with datalist\uFF1A',
        _react2.default.createElement(_Suggest2.default, { id: 'mySuggest', options: ['chenningning', 'chentiewei', 'zhangshaoxuan', 'wangchen', 'test', 'yeyeye'], defaultValue: 'test' })
    ),
    _react2.default.createElement(
        'h2',
        null,
        ' Rating '
    ),
    _react2.default.createElement(
        'div',
        null,
        ' Rating default\uFF1A ',
        _react2.default.createElement(_Rating2.default, null),
        ' '
    ),
    _react2.default.createElement(
        'div',
        null,
        ' Initial value 4: ',
        _react2.default.createElement(_Rating2.default, { defaultValue: 4 })
    ),
    _react2.default.createElement(
        'div',
        null,
        ' Rating width max value\uFF1A ',
        _react2.default.createElement(_Rating2.default, { max: 11, id: 'myRating' })
    ),
    _react2.default.createElement(
        'div',
        null,
        ' Rating width readonly\uFF1A ',
        _react2.default.createElement(_Rating2.default, { readonly: true, defaultValue: 3 })
    ),
    _react2.default.createElement(
        'h2',
        null,
        ' FormInput '
    ),
    _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    ' forminput '
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    ' ',
                    _react2.default.createElement(_FormInput2.default, null),
                    ' '
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    ' width defaultValue '
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    ' ',
                    _react2.default.createElement(_FormInput2.default, { defaultValue: 'this is react' }),
                    ' '
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    ' year '
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    ' ',
                    _react2.default.createElement(_FormInput2.default, { type: 'year' }),
                    ' '
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    ' rating '
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    ' ',
                    _react2.default.createElement(_FormInput2.default, { type: 'rating', defaultValue: 4 })
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    ' Suggest '
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_FormInput2.default, { type: 'suggest', options: ['chenningning', 'chentiewei', 'zhangshaoxuan', 'wangchen', 'test', 'yeyeye'] })
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    ' textarea '
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    ' ',
                    _react2.default.createElement(_FormInput2.default, { type: 'text' }),
                    ' '
                )
            )
        )
    ),
    _react2.default.createElement(
        'h2',
        null,
        'Form'
    ),
    _react2.default.createElement(
        'div',
        null,
        'form: ',
        _react2.default.createElement(_Form2.default, { fields: [{ label: 'Rating', type: 'rating', id: 'rateme' }, { label: 'Greetings', id: 'freetext' }],
            initialData: { rateme: 4, freetext: 'hello' }
        })
    )
), document.getElementById("pad"));