import React, { Component } from 'react';

import Sidebar from './components/sidebar';
import Header from './components/header';
import Content from './components/content';
import Table from'./components/table';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    	 {/*<div className = "home">    		
    		<div id="icon" ><HomeSharpIcon /></div>
			<div id= "title"> MYSITE </div>  
    	</div>*/} 
     <div className='rowC'>
            <Sidebar />
            <Content />
            
       </div>
    </div>
  );
}

export default App;
