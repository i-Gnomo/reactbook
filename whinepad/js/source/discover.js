'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';

/*
test-driven development TDD
 */

ReactDOM.render(
	<div style={{padding: "20px"}}>
		<h1>Component discover</h1>
		<h2>Logo</h2>
		<div style={{display: "inline-block", background: "purple"}}>
			<Logo />
		</div>
		<h2>Button</h2>
		<div>Button with onCick：<Button onClick={()=>alert("hoho")}>Click me</Button></div>
		<div>A link: <Button href="http://react-china.org/" target="_blank">Follow me</Button></div>
		<div>Custom class name: <Button className="custom">I do nothing</Button></div>
		<h2>Suggest</h2>
		<div>Suggest with datalist：<Suggest id="mySuggest" options={['chenningning','chentiewei','zhangshaoxuan','wangchen','test','yeyeye']} defaultValue="test" /></div>
  		<h2>Rating</h2>
  		<div>Rating default：<Rating /></div>
  		<div>Initial value 4: <Rating defaultValue={4} /></div> 
  		<div>Rating width max value：<Rating max={11} id="myRating" /></div>
  		<div>Rating width readonly：<Rating readonly={true} defaultValue={3} /></div>
  	</div>,
	document.getElementById("pad")
);