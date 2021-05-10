import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useQuery } from "react-query";
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import axios, { AxiosResponse } from 'axios'

import { Country } from "../types/Country";
import Filter from '../components/Filter'

import api from '../api/Api'

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Home = () => {
  // const [countries, setCountries] = useState<Country[]>();
  const [countries, setCountries] = useState();
  const [textSearch, setTextSearch] = useState('');
  const [regionSelected, setRegionSelected] = useState('');
  let countriesAll = ""

  useEffect(() => {
    console.log(textSearch)
    if (textSearch) {
      axios.get(`https://restcountries.eu/rest/v2/name/${textSearch}`)
        .then(({ data }) => setCountries(data));
    } else {
      setCountries(countriesAll);
    }
  }, [textSearch]);

  useEffect(() => {
    QueryAllCountries()
    countriesAll = countries
  }, []);

  useEffect(() => {
    if (regionSelected) {
      axios.get(`https://restcountries.eu/rest/v2/region/${regionSelected}`)
        .then(({ data }) => setCountries(data));
    } else {
      setCountries(countriesAll);
    }
  }, [regionSelected]);


  const QueryAllCountries = async () => {
    // Use [] as second argument in useEffect for not rendering each time
    axios.get('https://restcountries.eu/rest/v2/all')
      // .then((response: AxiosResponse) => {
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      });
  }

  const handleInput = ({ value }) => {
    setTextSearch(value)
    // query(value);
  }

  const handleChange = (e) => {
    setRegionSelected(e.target.value);
    // select(e.target.value);
  }

  return (
    <>
      <Grid container className='filter-row'>
        <Grid item xs={9}>
          <InputBase
            placeholder="Search for a country..."
            inputProps={{ 'aria-label': 'search' }}
            onInput={({ target }) => handleInput(target)}
            value={textSearch}
          />
        </Grid>

        {/* <Grid item xs={3}>
          <Filter />
        </Grid> */}

        <FormControl variant="outlined">
          <InputLabel id="region-label">Região</InputLabel>
          <Select
            labelId="region-label"
            value={regionSelected}
            onChange={handleChange}
            label="Region"
          >
            {/* <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem> */}
            {regions.map((region, idx) => (<MenuItem value={region.code} key={idx}>{region.name}</MenuItem>))}
          </Select>
        </FormControl>
      </Grid>

      {/* Countries flags */}
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