import React from 'react';
import { useQuery } from "react-query";

import { Country } from "./types/Country";

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Home from './pages/Home';

export default function App() {

  const { data } = useQuery<Country[]>(
    "countries",
    fetchCountries
  );

  return (
    <Router>

      <div>
        <Switch>
          <Home countries={data} />
          <h1>fu</h1>
        </Switch>

      </div>

    </Router>
  );
};

const fetchCountries = () =>
  fetch("https://restcountries.eu/rest/v2/all").then((res) => res.json())
