import React from 'react';
import { useQuery } from "react-query"
// import axios from 'axios';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


import './App.css';
import Home from './pages/Home'
// import api from './api/Api'
import { Country } from "./types/Country"


export default function App() {
  // console.log(api)
  // const data = api
  // const { isLoading, error, data } = useQuery<Country[]>(
  //   "countries",
  //   () => axios(String(process.env.API_URL))
  // )

  // const fetchCountries = async () =>
  //   // await axios.get("https://restcountries.eu/rest/v2/all").then(res => res.data)
  //   await axios("https://restcountries.eu/rest/v2/all").then(res => res.data)

  const { data, isLoading, error } = useQuery<Country[]>(
    "countries",
    fetchCountries
  );

  return (
    <Router>
      <div>
        <Switch>
          {/* <Home countries={data} />
          {console.log(data)} */}
          <h1>fu</h1>
        </Switch>
      </div>
    </Router>
  );
}

const fetchCountries = () =>
  fetch("https://restcountries.eu/rest/v2/all").then((res) => res.json())

