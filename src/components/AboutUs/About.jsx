import React from 'react';
import { Typography, Card, CardContent, Divider, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '20px',
  },
  card: {
    marginBottom: '20px',
    
  },
  content:{
    color: 'white'
  }
});

const aboutData = [
  {
    title: 'Our Vision',
    content:
      'Welcome to Sunrise Acadmey, your premier destination for horse riding adventures and equestrian experiences. Founded with a passion for horses and a commitment to excellence, we aim to provide riders of all levels with unforgettable experiences in the world of equestrian sports.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam vel purus fringilla vehicula. Integer convallis, velit et suscipit laoreet, justo tortor mollis urna, non commodo leo lacus eget mauris.'
  },
  {
    title: 'Our Mission',
    content:
      `Our mission is to connect horse enthusiasts with top-tier riding facilities, professional trainers, and scenic trails. Whether you're a beginner looking to take your first ride or an experienced rider seeking new challenges, we offer a wide range of services to meet your needs.`
  },
  {
    title: 'Our Team',
    content:
      `Personalized Experiences: We understand that every rider is unique. That\'s\ why we offer personalized experiences tailored to your interests and skill level.Top-notch Facilities: We partner with the best riding facilities that offer well-maintained stables, arenas, and trails.\n Passionate Team: Our team is comprised of dedicated equestrians who are passionate about sharing their love for horses and riding with you.`,
  },
];

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant="h4">About Us</Typography>
      <Divider variant="middle" style={{ marginBottom: '20px' }} />
      <Grid container spacing={3}>
        {aboutData.map((item, index) => (
          <Grid item xs={12} md={12} key={index}>
            <Card className={classes.card} style={{backgroundColor: 'transparent'}}>
              <CardContent className={classes.content}>
                <Typography variant="h5" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AboutUs;
