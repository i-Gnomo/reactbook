'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import FancyLink from './components/FancyLink';

ReactDOM.render(
	<h1>
		<Logo /> Welcome to the App!<br/>
		<FancyLink 
			href="mqqwpa://im/chat?chat_type=wpa&uin=4006390520&version=1&src_type=web&web_src=bjhuli.com" 
			target="_blank"
			className="a-link" 
			style={{textDecoration:'none',paddingLeft:'40px',fontSize:'14px'}}
			attrType="button">
			<span>click me</span>
		</FancyLink>
	</h1>,
	document.getElementById('app')
);