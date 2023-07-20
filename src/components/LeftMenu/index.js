import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BoltIcon from '@mui/icons-material/Bolt';

import './styles.css';

const LeftMenu = ({ onItemChange }) => {

  return (<div className='menu-container'>
    <IconButton
      onClick={onItemChange}
      style={{color: 'white', backgroundColor: '#007fff'}}>
      <HomeIcon />
    </IconButton>
    <IconButton
      onClick={onItemChange}
      style={{color: 'white', backgroundColor: '#007fff'}}>
      <BarChartIcon />
    </IconButton>
    <IconButton
      onClick={onItemChange}
      style={{color: 'white', backgroundColor: '#007fff'}}>
      <PersonOutlineIcon />
    </IconButton>
    <IconButton
      onClick={onItemChange}
      style={{color: 'white', backgroundColor: '#007fff'}}>
      <MailOutlineIcon />
    </IconButton>
    <IconButton
      onClick={onItemChange}
      style={{color: 'white', backgroundColor: '#007fff'}}>
      <BoltIcon />
    </IconButton>
  </div>);
};

export default LeftMenu;