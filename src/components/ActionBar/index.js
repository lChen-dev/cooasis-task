import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import { deepOrange } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

import './styles.css';
import { Typography } from '@mui/material';

const ActionBar = () => {
  return (
    <div className='action-container'>
      <div className='button-sector'>
        <IconButton 
          style={{color: 'white', backgroundColor: '#007fff'}}>
          <AddIcon />
        </IconButton>
        <Badge color='error' variant='dot'>
          <IconButton 
            style={{color: '#007fff', borderColor: '#007fff'}}>
            <NotificationsNoneIcon />
          </IconButton>
        </Badge>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <div className='profile-sector'>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>C</Avatar>
        <Typography variant='h6' component='h6' color='blueviolet'>John Dae</Typography>
      </div>
    </div>
  );
};

export default ActionBar;