// const API = axios.create({
//   baseURL: process.env.API_URL,
//   responseType: 'json'
// })


import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
// react-query fetch with axios
function API() {
  const { isLoading, error, data } = useQuery('countries', () =>
    axios(String(process.env.API_URL)))
  const only1 = Array.isArray(data) ? data[0] : data
  return (only1
    // <div className="App">
    //   <h1>React Query example with star wars API</h1>
    //   {error && <div>Something went wrong ...</div>}

    //   {isLoading ? (
    //     <div>Retrieving Luke Skywalker Information ...</div>
    //   ) : (
    //     <pre>{JSON.stringify(data, null, 2)}
    //     </pre>
    //   )}
    // </div>
  );
}
export default API;