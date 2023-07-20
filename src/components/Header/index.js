import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { deepOrange } from '@mui/material/colors';
import SearchInput from '../SearchInput';
import ActionBar from '../ActionBar';

import './styles.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='title-sector'>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>C</Avatar>
        <Typography align='center' component='h4' variant='h4' style={{fontWeight: '800', color: 'blue', margin: '0 25px'}}>Dashboard</Typography>
      </div>
      <div className='search-sector'>
        <SearchInput />
      </div>
      <div>
        <ActionBar />
      </div>
    </div>
  );
};

export default Header;