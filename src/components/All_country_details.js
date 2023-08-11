import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const AllCountryDetails = ({ country }) => {
  return (
    <Grid container spacing={2} style={{padding:"20px"}}>
      {country.map((countryInSingle) => (
        <Grid item key={countryInSingle.name} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <a href='!#'>
              <CardMedia
                component='img'
                alt='flag'
                height='120'
                image={countryInSingle.flag}
              />
            </a>
            <CardContent>
              <Typography variant='h6'>{countryInSingle.name}</Typography>
              <Typography variant='subtitle2'>{countryInSingle.capital}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default AllCountryDetails;
