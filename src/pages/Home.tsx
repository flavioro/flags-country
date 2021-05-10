import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useQuery } from "react-query";

import axios, { AxiosResponse } from 'axios'

import { Country } from "../types/Country";
import Filter from '../components/Filter'

import api from '../api/Api'

const Home = () => {
  const [countries, setCountries] = useState<Country[]>();

  useEffect(() => { QueryAllCountries() }, []);

  const QueryAllCountries = async () => {
    // Use [] as second argument in useEffect for not rendering each time
    axios.get('https://restcountries.eu/rest/v2/all')
    .then((response: AxiosResponse) => {
        console.log(response.data);
        setCountries( response.data );
    });
  }

  return (
    <>

      <Grid container className='filter-row'>
        <Grid item xs={9}>
          <input type='text' placeholder='Search for a country...' className='input-search' />
        </Grid>
        <Grid item xs={3}>
          <Filter />
        </Grid>
      </Grid>

      // Countries flags
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