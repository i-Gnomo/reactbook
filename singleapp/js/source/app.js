'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import FancyLink from './components/FancyLink';
import Video from './components/Video';

ReactDOM.render(
	<div>
		{/*link is a mqqwpa*/}
		<Logo />
		<FancyLink 
			href="mqqwpa://im/chat?chat_type=wpa&uin=4006390520&version=1&src_type=web&web_src=bjhuli.com" 
			target="_blank"
			className="a-link" 
			style={{textDecoration:'none',paddingLeft:'40px',fontSize:'14px'}}
			attrType="button">
			<span>click me</span>
		</FancyLink>
		{/*http://112.253.22.165/28/k/p/k/n/kpknofhlebzhwzcmykoqcwreqnkotu/hc.yinyuetai.com/E74501636C36DE7661E0AEE24D1FE0AA.mp4*/}
		<Video style={{width:'300px',height:'200px'}} videosrc="images/video.mp4"></Video>
	</div>,
	document.getElementById('app')
);