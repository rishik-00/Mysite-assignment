import React from 'react';
import './maintable.css';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';

function CustomizedTables(){
  return(
    <div className = 'Table'>
      <div className = 'tablerow'>
        <div className = 'a'>
          Department/Role Names

        </div>
        <div className = 'b' id = 'one'>
        Access Level
        </div>
        <div className = 'c'>
        No. of Members
        </div>
        <div className = 'd'>
        Last Updated
        </div>
        <div className = 'e'>
        </div>
    </div>
    <div className = 'tablerow2'>
        <div className = 'radio' >
         <RadioButtonUncheckedOutlinedIcon />
        </div>
        <div className = 'a'>
          Management Team

        </div>
        <div className = 'b'>
        Access Level
        </div>
        <div className = 'c'>
        4
        </div>
        <div className = 'd'>
        1 min ago
        </div>
        <div className = 'e' onClick={()=>{window.location.pathname = "/team"}}>
          <VisibilityOutlinedIcon />
        </div>
    </div>
    <div className = 'tablerow2'>
         <div className = 'radio'>
         <RadioButtonUncheckedOutlinedIcon />
        </div>
        <div className = 'a'>
          Procurement  Team

        </div>
        <div className = 'b' id = 'Restricted'>
        Restricted Access
        </div>
        <div className = 'c'>
        8
        </div>
        <div className = 'd'>
        1 min ago
        </div>
        <div className = 'e' onClick={()=>{window.location.pathname = "/team"}} >
          <VisibilityOutlinedIcon />
        </div>
    </div>
    <div className = 'tablerow2'>
         <div className = 'radio'>
         <RadioButtonUncheckedOutlinedIcon />
        </div>        
        <div className = 'a'>
          Project Team

        </div>
        <div className = 'b' id = 'Restricted'>
        Restricted Access
        </div>
        <div className = 'c'>
        16
        </div>
        <div className = 'd'>
        1 min ago
        </div>
        <div className = 'e' onClick={()=>{window.location.pathname = "/team"}}>
          <VisibilityOutlinedIcon />
        </div>
    </div>
    <div className = 'tablerow2'>
         <div className = 'radio'>
         <RadioButtonUncheckedOutlinedIcon />
        </div>
        <div className = 'a'>
          IT Team

        </div>
        <div className = 'b' id = 'Restricted'>
         Restricted Access
        </div>
        <div className = 'c'>
        4
        </div>
        <div className = 'd'>
        1 min ago
        </div>
        <div className = 'e' onClick={()=>{window.location.pathname = "/team"}} >
          <VisibilityOutlinedIcon />
        </div>
    </div>
    <div className = 'tablerow1'>
        <div className = 'a'>
          Super Admin

        </div>
        <div className = 'b'>
        Access Level
        </div>
        <div className = 'c'>
        1
        </div>
        <div className = 'd'>
        1 min ago
        </div>
        <div className = 'e' onClick={()=>{window.location.pathname = "/team"}}>
          <VisibilityOutlinedIcon />
        </div>
    </div>
    </div>
    );
}

export default CustomizedTables;