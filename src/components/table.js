import React from 'react';
import './table.css';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';

function Table(){
	return(
			<div className = 'table'>
				<button className = 'button'><AddIcon />Add Role</button>
				<div className = 'edit'><EditTwoToneIcon /></div>
				<div className = 'recycle'><DeleteOutlinedIcon /></div>
			</div>
		);
}

export default Table;