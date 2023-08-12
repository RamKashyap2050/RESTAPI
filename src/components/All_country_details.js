import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
} from "@mui/material";
const AllCountryDetails = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const newsFromServer = await fetchnews();
      setCountry(newsFromServer);
    };

    getNews();
  }, []);
  //Fetch Tasks from db.json
  const fetchnews = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    return data;
  };
  return (
    <>
      <div className="header d-flex justify-content-between align-items-center p-3 mb-4">
        <div className="d-flex align-items-center">
          <TextField
            id="outlined-basic"
            label="Where do you want to go?"
            variant="outlined"
          />
        </div>
        <div className="d-flex align-items-center">
          <select>
            {country.map((countryObj) => (
              <option key={countryObj.code} value={countryObj.code}>
                {countryObj.continents[0]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Grid container spacing={6}>
        {country.map((countryInSingle) => (
          <Grid item key={countryInSingle.name} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <a href="!#">
                <CardMedia
                  component="img"
                  alt="flag"
                  height="150"
                  image={countryInSingle.flags.svg}
                />
              </a>
              <CardContent>
                <Typography variant="h6">
                  {countryInSingle.name.common}
                </Typography>
                <br />
                <Typography variant="subtitle2">
                  Population: {countryInSingle.population}
                </Typography>
                <Typography variant="subtitle2">
                  Region: {countryInSingle.continents[0]}
                </Typography>
                <Typography variant="subtitle2">
                  Capital: {countryInSingle.capital}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AllCountryDetails;
