import React from 'react';
import Main from './main';
import Table from './table';
import Table1 from './table1.js';
import CustomizedTables from './maintable';
import MainTable2 from './maintable2';
import MainTable3 from './maintable3';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './content.css';

function Content(){

	return (
		<div>
		<Main/>
		<Router>
		<Switch>
			<Route path = "/Access">
				<Table/>
				<CustomizedTables/>
			 </Route>
			<Route path = '/team'>
				<Table1/>
				<MainTable2 />
			</Route>
			<Route path = '/teamdetail'>
				<Table1/>
				<MainTable3 />
			</Route>
		</Switch>
		</Router>
		</div>
		);

}

export default Content;