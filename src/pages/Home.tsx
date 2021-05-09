import React from 'react'
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const Home = ({ countries }) => {
  return (
    <>
      <Grid container spacing={3}>
        {countries && (
          countries.map((country, i) => (
            <Grid item xs={3} key={i}>

              <Link to={`countries/${country.alpha3Code}`} >
                <img src={country.flag} alt={`Flag of ${country.name}`} />
              </Link>

              <div>
                <h5>{country.name}</h5>
                {/* <p><strong>Population:</strong> {formatNumber(country.population)}</p> */}
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Capital:</strong> {country.capital}</p>
              </div>

            </Grid>
          ))
        )}

      </Grid>

    </>

  );
};

export default Home;