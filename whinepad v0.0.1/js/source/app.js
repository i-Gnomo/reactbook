'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Excel from './components/Excel';

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');
if(!headers){
	headers = [["Title","300"],["Year","150"],["Rating","150"],["Comments","150"]];
	data = [['Test', '2015', '3', 'meh']];
	console.log(headers);
}

ReactDOM.render(
	<div>
	  <h1>
	    <Logo /> Welcome to Whinepad!
	  </h1>
	  <Excel headers={headers} initialData={data} />
  	</div>,
	document.getElementById('pad')
);