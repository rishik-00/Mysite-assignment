import React from 'react';
import './maintable2.css';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';

function MainTable2(){
	return(
		<div className = 'outerdiv'>
			<div className = "wrap">
				<div className = 'text'>
				<div className = 'pad'>
					Access Control
				</div>
				<span class = "divider" />
				<div className = 'pad1'>
				Assignes Members
				</div>
				</div>
			</div>




				  <div className = 'Table2'>
			      <div className = 'table2row'>
			       
			        <div className = 'a2'>
			          Department/Role Names

			        </div>
			        <div className = 'b2' >
			        Access Level
			        </div>
			        <div className = 'c2'>
			        Summary
			        </div>
			        <div className = 'd2'>
			        Last Updated
			        </div>
			        <div className = 'e2'>
			        </div>
			    </div>
			    <div className = 'table2row1'>
			        <div className = 'radio2'>
			         <ControlPointOutlinedIcon />
			        </div>
			        <div className = 'a2'>
			          Budget

			        </div>
			        <div className = 'b2'>
			        Access Level
			        </div>
			        <div className = 'c2'>
			        4
			        </div>
			        <div className = 'd2'>
			        1 min ago
			        </div>
			        <div className = 'e2'>
			          <ToggleOnIcon />
			        </div>
			    </div>
			    <div className = 'table2row1'>
			          <div className = 'radio2' id = 'click' onClick={()=>{window.location.pathname = "/teamdetail"}}>
			         <ControlPointOutlinedIcon />
			        </div>
			        <div className = 'a2'>
			          Bidding

			        </div>
			        <div className = 'b2' id = 'grey'>
			        No Access
			        </div>
			        <div className = 'c2'>
			        8
			        </div>
			        <div className = 'd2'>
			        1 min ago
			        </div>
			        <div className = 'e2' id = 'off'>
			          <ToggleOffIcon />
			        </div>
			    </div>
			    <div className = 'table2row1'>
			          <div className = 'radio2'>
			         <ControlPointOutlinedIcon />
			        </div>        
			        <div className = 'a2'>
			          Vendor Portal

			        </div>
			        <div className = 'b2' id = 'Restricted' >
			        Restricted Access
			        </div>
			        <div className = 'c2'>
			        16
			        </div>
			        <div className = 'd2'>
			        1 min ago
			        </div>
			        <div className = 'e2'>
			          <ToggleOnIcon />
			        </div>
			    </div>
			    <div className = 'table2row1'>
			         <div className = 'radio2'>
			         <ControlPointOutlinedIcon />
			        </div>
			        <div className = 'a2'>
			          Purchase Order/Work Order

			        </div>
			        <div className = 'b2' id = 'Restricted' >
			         Restricted Access
			        </div>
			        <div className = 'c2'>
			        4
			        </div>
			        <div className = 'd2'>
			        1 min ago
			        </div>
			        <div className = 'e2'>
			          <ToggleOnIcon />
			        </div>
			    </div>
			    <div className = 'table2row1'>
			    	 <div className = 'radio2'>
			         <ControlPointOutlinedIcon />
			        </div>
			        <div className = 'a2'>
			          Organisational Profile

			        </div>
			        <div className = 'b2'>
			        Access Level
			        </div>
			        <div className = 'c2'>
			        1
			        </div>
			        <div className = 'd2'>
			        1 min ago
			        </div>
			        <div className = 'e2'>
			          <ToggleOnIcon />
			        </div>
			    </div>
			    <div className = 'table2row1'>
			    	 <div className = 'radio2'>
			         <ControlPointOutlinedIcon />
			        </div>
			        <div className = 'a2'>
			          Permissions Control

			        </div>
			        <div className = 'b2' id = 'grey'>
			        No Access
			        </div>
			        <div className = 'c2'>
			        1
			        </div>
			        <div className = 'd2'>
			        1 min ago
			        </div>
			        <div className = 'e2' id = 'off'>
			         <ToggleOffIcon />
			        </div>
			    </div>
			    </div>
		</div>
		);
}

export default MainTable2;