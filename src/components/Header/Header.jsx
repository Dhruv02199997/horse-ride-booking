import { Divider, Icon, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import React from 'react'
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  text: {
      color: 'white',
      fontWeight:'bold',
      fontSize:'18px',
      cursor: 'pointer',
      '&:hover' : {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
  }
})

export default function Header() {
  const classes = useStyles();
  return (
    <Box sx={{
      flex: '1 0 auto',
      paddingBottom: '80px',
      }}>
      <Toolbar>
        <Icon sx={{ flexGrow: .3 }}>
         <Link to='/'>
          <BedroomBabyIcon/>
         </Link>
        </Icon>
       <Box sx={{ flexGrow: 1 }}>
          <NavLink to='/' className={classes.text}>
          Home
          </NavLink>
       </Box>
       <Box sx={{ flexGrow: 1 }}>
         <NavLink to='about' className={classes.text}>
          About Us
          </NavLink>
       </Box>
       <Box sx={{ flexGrow: 1 }}>
         <NavLink to='bookride' className={classes.text}>
          Book Ride
          </NavLink>
       </Box>
     </Toolbar>
     <Divider variant="middle" style={{backgroundColor:'white'}}/>
    </Box>
  )
}
