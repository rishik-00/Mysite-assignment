import React from 'react';
import './maintable3.css';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';
import RadioButtonCheckedSharpIcon from '@material-ui/icons/RadioButtonCheckedSharp';
import CheckBoxOutlineBlankSharpIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp';
import CheckBoxSharpIcon from '@material-ui/icons/CheckBoxSharp';
import Icon from '@material-ui/core/Icon';

function MainTable3(){
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




				  <div className = 'Table3'>
			      <div className = 'table3row'>
			       
			        <div className = 'a3'>
			          Department/Role Names

			        </div>
			        <div className = 'b3' >
			        Access Level
			        </div>
			        <div className = 'c3'>
			        Summary
			        </div>
			        <div className = 'd3'>
			        Last Updated
			        </div>
			        <div className = 'e3'>
			        </div>
			    </div>
			    <div className = 'table3row1'>
			        <div className = 'radio3'>
			         <ControlPointOutlinedIcon />
			        </div>
			        <div className = 'a3'>
			          Budget

			        </div>
			        <div className = 'b3'>
			        Access Level
			        </div>
			        <div className = 'c3'>
			        	View <span class = "divider" />Create <span class = "divider" />Edit<span class = "divider" /> Delete
			        </div>
			        <div className = 'd3'>
			        1 min ago
			        </div>
			        <div className = 'e3'>
			          <ToggleOnIcon />
			        </div>
			    </div>
			    <div className = 'table3row1 special'>
			          <div className = 'radio3'>
			         <RemoveCircleOutlineSharpIcon />
			        </div>
			        <div className = 'a3'>
			          Bidding
			         
			          <div className = 'subrow'>
			           All Aspects in the bidding module
			          </div>
			          
			          	<div className = 'subblock'>
				          	<div className = 'innerblock'>
					          	<div id = 'big'>	Access Control</div>
					          	<div id = 'taby'><RadioButtonUncheckedSharpIcon fontSize = {"small"} />    All Access <div id = "tabygrey">Can Access all time</div> </div>
					          	<div id = 'taby'><RadioButtonCheckedSharpIcon  fontSize = {"small"} style={{ color: '#673AB7' }}/> Restricted Access <div id = "tabygrey">Can Access only by assigned or created items</div> </div>
					          	
				          	</div>
				          	
				          	<div className = 'innerblock1'>
				          	<div id = 'big'>Permissions</div>
				          	<div id = 'taby'><CheckBoxOutlineBlankSharpIcon fontSize = {"small"} /> View item in  Access  </div>
				          	<div id = 'taby'><CheckBoxSharpIcon fontSize = {"small"}  style={{ color: '#673AB7' }}/> Edit item in  Access  </div>
				          	<div id = 'taby'><CheckBoxOutlineBlankSharpIcon fontSize = {"small"} /> Create item in  Access  </div>
				          	<div id = 'taby'><CheckBoxOutlineBlankSharpIcon fontSize = {"small"} /> Delete item in  Access  </div>
				          	</div>
			          	</div>
			          

			        </div>
			        {/*<div className = 'b3' >
			        			        
			        			        </div>
			        			        <div className = 'c3'>
			        			        
			        			        </div>*/}
			        <div className = 'd3'>
			        1 min ago
			        </div>
			        <div className = 'e3'>
			          <ToggleOnIcon />
			        </div>
			    </div>
			    <div className = 'table3row1'>
			          <div className = 'radio3'>
			         <ControlPointOutlinedIcon />
			        </div>        
			        <div className = 'a3'>
			          Vendor Portal

			        </div>
			        <div className = 'b3' id = 'Restricted' >
			        Restricted Access
			        </div>
			        <div className = 'c3'>
			        View <span class = "divider" /> Create 
			        </div>
			        <div className = 'd3'>
			        1 min ago 
			        </div>
			        <div className = 'e3'>
			          <ToggleOnIcon />
			        </div>
			    </div>
			    <div className = 'table3row1'>
			         <div className = 'radio3'>
			         <ControlPointOutlinedIcon />
			        </div>
			        <div className = 'a3'>
			          Purchase Order/Work Order

			        </div>
			        <div className = 'b3' id = 'Restricted' >
			         Restricted Access
			        </div>
			        <div className = 'c3'>
			         View<span class = "divider" />Create
			        </div>
			        <div className = 'd3'>
			       1 min ago
			        </div>
			        <div className = 'e3'>
			          <ToggleOnIcon />
			        </div>
			    </div>
			    <div className = 'table3row1'>
			    	 <div className = 'radio3'>
			         <ControlPointOutlinedIcon />
			        </div>
			        <div className = 'a3'>
			          Organisational Profile

			        </div>
			        <div className = 'b3'>
			        Access Level
			        </div>
			        <div className = 'c3'>
			       View <span class = "divider" /> Create <span class = "divider" />Edit<span class = "divider" /> Delete
			        </div>
			        <div className = 'd3'>
			        1 min ago
			        </div>
			        <div className = 'e3'>
			          <ToggleOnIcon />
			        </div>
			    </div>
			    <div className = 'table3row1'>
			    	 <div className = 'radio3'>
			         <ControlPointOutlinedIcon />
			        </div>
			        <div className = 'a3'>
			          Permissions Control

			        </div>
			        <div className = 'b3' id = 'grey'>
			        No Access
			        </div>
			        <div className = 'c3'>
			        
			        </div>
			        <div className = 'd3'>
			        1 min ago
			        </div>
			        <div className = 'e3' id = 'off'>
			         <ToggleOffIcon />
			        </div>
			    </div>
			    </div>
		</div>
		);
}

export default MainTable3;