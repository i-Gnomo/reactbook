# reactbook
I'm a novice on the road, here are some tips.

Question No.1

$ npm install --save-dev react

->error "no such file or directory" need package.json

then $ npm init create a package.json file


Question No.2

browser error tip

->error "Uncaught TypeError: _react2.default.render is not a function"

then change "React.render(<App/>,document.getElementById('app'));" to "ReactDOM.render(<App/>,document.getElementById('app'));"
