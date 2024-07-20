import React from 'react';
import { Typography, Grid, Box, IconButton, Stack, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px 0',
    marginTop: 'auto',
    bottom: "0",
    right: '0',
    left: '0',
    // overflow: 'hidden'
  },
  contactItem: {
    display: 'grid',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1),
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
  socialMediaIcons: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paragraph: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  iconButton: {
    color: 'white',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Stack>
           <Typography variant="h6" align="center" gutterBottom>Contact Us</Typography>
           <List>
            <ListItem>
            <ListItemIcon>
            <LocationOnIcon />
            </ListItemIcon>
              <ListItemText primary={'123 Main Street, Anytown, USA'} />
            </ListItem>
            <ListItem>
            <ListItemIcon>
            <PhoneIcon/>
            </ListItemIcon>
              <ListItemText primary={'+91 87662-19674'} />
            </ListItem>
            <ListItem>
            <ListItemIcon>
            <EmailIcon />
            </ListItemIcon>
              <ListItemText primary={'sunrise@gmail.com'} />
            </ListItem>
           </List>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" gutterBottom>Follow Us</Typography>
          <Box className={classes.socialMediaIcons}>
            <IconButton href="https://wa.me/8766219674" target="_blank" className={classes.iconButton}>
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://www.instagram.com/dhruvsharma_0219/?next=%2F" target="_blank" className={classes.iconButton}>
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://www.facebook.com/profile.php?id=100018139391885" target="_blank" className={classes.iconButton}>
              <FacebookIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi, nec ultricies nibh.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
