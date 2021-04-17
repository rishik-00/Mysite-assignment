import React from 'react';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import TableChartIcon from '@material-ui/icons/TableChart';
import Divider from '@material-ui/core/Divider';
import CachedIcon from '@material-ui/icons/Cached';
import './main.css';

function Main() {

	return(
		<div className = 'row'>
			<div className = "tabs">
			<div className = 'tab'>
			  <div id = "icon"><RssFeedIcon /></div>
			  <div id = "title">Permissions</div>
			</div>
			<span class = "divider" />
			<div className = 'tab1'>
			<div id = "icon"><TableChartIcon /></div>
			  <div id = "title">Approval Matrix</div>
			</div>
			</div>
			<div className='options'>
			<div className='option'>
					<CachedIcon />
				</div>
				<div className='option'>
					Last Synced 10 mins ago
				</div>
			</div>
			 
		</div>
		);
}

export default Main;
