import React from 'react';
import AccountTreeSharpIcon from '@material-ui/icons/AccountTreeSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import BusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import SecuritySharpIcon from '@material-ui/icons/SecuritySharp';

export const Data = [
 
  {
 	title: 'Projects',
 	icon:  <AccountTreeSharpIcon />,
 	link: '/Projects'
 },
  {
 	title: 'Organisation Profile',
 	icon:  <BusinessCenterSharpIcon />,
 	link: '/Organisation'
 },
  {
 	title: 'Access Control',
 	icon:  <SecuritySharpIcon />,
 	link: '/Access'
 }
];