'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';
import FormInput from './components/FormInput';
import Form from './components/Form';

/*
test-driven development TDD
 */

ReactDOM.render( 
    <div style = {{ padding: "20px" }}>
        <h1> Component discover </h1> 
        <h2> Logo </h2>
        <div style = {{display: "inline-block", background: "purple" }}>
            <Logo />
        </div> 
        <h2> Button </h2>
        <div> Button with onCick： 
            <Button onClick = {() => alert("hoho")}> Click me </Button></div>
        <div> A link:
            <Button href = "http://react-china.org/" target = "_blank"> Follow me </Button>
        </div>
        <div> Custom class name: <Button className = "custom"> I do nothing </Button>
        </div>
        <h2> Suggest </h2> 
        <div> Suggest with datalist： 
            <Suggest id = "mySuggest" options = {['chenningning', 'chentiewei', 'zhangshaoxuan', 'wangchen', 'test', 'yeyeye']} defaultValue = "test" /> 
        </div>
        <h2> Rating </h2> 
        <div> Rating default： <Rating /> </div> 
        <div> Initial value 4: <Rating defaultValue = { 4 }/></div>
        <div> Rating width max value： <Rating max = { 11 } id = "myRating" /></div>
        <div> Rating width readonly： <Rating readonly = { true } defaultValue = { 3 }/></div>

        <h2> FormInput </h2> 
        <table>
            <tbody>
                <tr>
                    <td> forminput </td> 
                    <td> <FormInput /> </td> 
                </tr> 
                <tr>
                    <td> width defaultValue </td> 
                    <td> <FormInput defaultValue = "this is react" / > </td> 
                </tr> 
                <tr>
                    <td> year </td> 
                    <td> <FormInput type = "year" / > </td> 
                </tr> 
                <tr>
                    <td> rating </td> 
                    <td> <FormInput type = "rating" defaultValue = { 4 }/></td>
                </tr>
                <tr>
                    <td> Suggest </td> 
                    <td> 
                        <FormInput type = "suggest" options = {['chenningning', 'chentiewei', 'zhangshaoxuan', 'wangchen', 'test', 'yeyeye'] }/>
                    </td>
                </tr> 
                <tr>
                    <td> textarea </td> 
                    <td> <FormInput type = "text" /> </td> 
                </tr> 
            </tbody> 
        </table>
        <h2>Form</h2>
        <div>form: <Form fields={[
            {label:'Rating', type:'rating', id:'rateme'},
            {label:'Greetings', id:'freetext'}
        ]} 
            initialData = {{rateme:4,freetext:'hello'}}
        /></div>
    </div>,
    document.getElementById("pad")
);