import React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, MenuItem, Container, Typography, Grid, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {cardData} from '../Home/Home'


const useStyles = makeStyles({
  bx: {
    alignItems: 'center',
    marginRight: "20px"
  },
  color: {
    color: "white"
  },
});

const popup = (name) => {
  alert(`Congrulation ${name} `);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be a 10 digit number')
    .required('Phone number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  datetime: Yup.date().required('Date and time is required')
});

const Book = () => {
  const classes = useStyles();
  return (
    <Container className="min-h-screen py-40">
      <Typography className={classes.color} variant="h1" align="center" gutterBottom>
        Book Your Ride
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Formik
            initialValues={{ horse: '', name: '', phone: '', email: '', datetime: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, handleChange, handleBlur, values, errors, touched }) => (
              <Form className={classes.color}>
                <Box mb={2}>
                  <Typography>Select the Horse</Typography>
                  <TextField
                    select
                    name="horse"
                    value={values.horse}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  >
                    {cardData.map((card, index) => (
                      <MenuItem key={index} value={card.title}>
                        {card.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box mb={2}>
                  <TextField
                    name="name"
                    label="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    name="phone"
                    label="10 digit number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    name="email"
                    label="xyz@gmail.com"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    name="datetime"
                    label="Date and Time"
                    type="datetime-local"
                    value={values.datetime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    error={touched.datetime && Boolean(errors.datetime)}
                    helperText={touched.datetime && errors.datetime}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <Box display="flex" justifyContent="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    className={classes.bx}
                    onClick={popup}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Book;