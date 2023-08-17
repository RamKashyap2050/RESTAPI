import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CardMedia,
} from "@mui/material";

const SelectedCountry = ({ country, onClose }) => {
  return (
    <Dialog open={Boolean(country)} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Selected Country</DialogTitle>
      <DialogContent>
        {country && (
          <div>
            <h2>{country.name.common}</h2>
            <div style={{ width: "300px" }}>
              <CardMedia
                component="img"
                alt="flag"
                height="200"
                image={country.flags.svg}
              />
            </div>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectedCountry;
