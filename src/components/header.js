import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './header.scss';

function Header() {
	return (
		<div className = "header">
		<div className="logo-container">
		<div id='logo'><HomeIcon  /></div>
		 <div id = 'title'>MYSITE</div>
		</div>
		
		<div className='options'>
			<div className='option'>
				<AccountCircleIcon />
			</div>
			<div className='option'>
				Kishore
			</div>
			<div className='option' >
				<NotificationsNoneIcon />
			</div>
			<div className='option' >
				<HelpOutlineIcon />
			</div>
		
	</div>
		</div>
	);
}

export default Header;