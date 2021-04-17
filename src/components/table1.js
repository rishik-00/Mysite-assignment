import React from 'react';
import './table1.css';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';

function Table1(){
	return(
			<div className = 'table1'>
				<div className = 'arrow'><KeyboardBackspaceOutlinedIcon /></div>
				<div className = 'button1'>Management Team</div>
				<div className = 'edit1'><EditTwoToneIcon /></div>
			</div>
		);
}

export default Table1;