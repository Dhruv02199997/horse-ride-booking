import React from 'react'
import { Typography, Card, CardContent, CardActions, Button, Grid, CardMedia, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Container } from '@mui/system';
export const useStyles = makeStyles({
    card:{
        boxShadow: 'none',
        cursor: 'pointer',
        marginBottom:'',
    },
    cardd:{
      boxShadow: 'none',
      cursor: 'pointer',
      marginBottom:'40px',
      
    },
    content:{
      color: 'white',
       
    },
    media:{
      height:300,
      backgroundSize: '100% 100%'
    }
})

const cardData = [
  { image: 'https://free-3dtextureshd.com/wp-content/webpc-passthru.php?src=https://free-3dtextureshd.com/wp-content/uploads/2024/04/138.jpg&nocache=1',
    title: 'Nokout',
    content: 'Known for his extraordinary speed and stamina.'

  },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzAiZa5jpzXlwTJLaq7Hht79z7umuMLpQkxQ&s',
    title: 'Kremshaw',
    content: `Often hailed as the greatest racehorse of all time.`
  },
  { image: 'https://wallpapers.com/images/featured/running-horse-background-p6efjtcjnaks77vt.jpg',
    title: 'Sultan',
    content: `Overcame a troubled early life to become a racing legend.`
  },
  { image: 'https://c4.wallpaperflare.com/wallpaper/779/643/688/horse-pc-backgrounds-hd-wallpaper-preview.jpg',
    title: 'Ryan King',
    content: `Displayed an almost arrogant dominance on the racetrack.`
  }
]
export {cardData}
export default function Home() {
    const classes = useStyles();
  return (
    <Stack sx={{width:'95%',m:'auto',}}>
      <br />
     <Card className={classes.card} style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
       <CardContent>  
        <Typography className={classes.content} variant='h3' gutterBottom>Ride to Success With <br/> Sunrise Acadmey</Typography>
        <Typography className={classes.content} variant='h7'>
          Sunrise Acadmey is an elite equestrian place where you <br />can develop skills in horse riding and horse care.
        </Typography>
       </CardContent>
       <CardActions>
        <Button variant='contained'>
          Book your Slot
        </Button>
       </CardActions>
     </Card>
     <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className={classes.cardd} style={{backgroundColor: 'transparent'}}>
              <CardMedia
                className={classes.media}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography className={classes.content} variant="h5" gutterBottom>
                  {card.title}
                </Typography>
                <Typography className={classes.content} variant="body1">
                  {card.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained">Available</Button>
              </CardActions>
           
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{
        display: 'flex',
        justifyContent: 'right',
        bottom: '25px', // Adjust this value to stay above the footer
        // right: '10px',
        color: 'white',
        fontWeight: 'bolder',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add background for better readability
        padding: '10px', // Optional: Add padding for better spacing
      }}>
     <Typography  variant='h7'>
      Our mission is to provide you the knowledge, skills, <br />and experience necessary to achieve excelence in equestrian sports.
     </Typography>
     </Box>
     </Stack>
    )
}




