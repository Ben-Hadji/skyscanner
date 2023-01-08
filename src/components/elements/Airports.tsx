import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Airport} from '../../types/types';
import Wrapper from '../styles/Wrapper';

interface IAirport {
  loading: boolean;
  airports: Airport[];
  errorMsg: string;
}

const getAirports = () => {
  const val: string = 'washington';
    const options = {
      params: {query: val},
      headers: {
        "Access-Control-Allow-Origin": '*',
        'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      }
    };
    
    return axios.get('https://skyscanner50.p.rapidapi.com/api/v1/searchAirport', options)
}


const Airports: React.FC = (Props) => {
  const [airport, setAirport] = useState<IAirport>({
    loading: false, 
    airports: [] as Airport[],
    errorMsg: "",
  });

  useEffect(() => {
    setAirport({ ...airport, loading: true});
    getAirports()
      .then((res) =>
        setAirport({
          ...airport,
          loading: false,
          airports: res.data.data,
        })
      )
      .catch((err) => 
        setAirport({
          ...airport,
          loading: false,
          errorMsg: err.message,
        })
      );
  }, []);

  const {loading, airports, errorMsg} = airport;
  


  return (
    <div className="App">
      <h3>CECI EST UN TEST</h3>
      <Wrapper>
        <h1>Data from APIS</h1>
        {errorMsg && <p>{errorMsg}</p>}
        {loading && <h1>Loading...</h1>}
        {airports.length}
        <table>
          <thead>
            <tr>
              <td>Place name</td>
              <td>Contry name</td>
            </tr>
          </thead>
          <tbody>
            {airports.length > 0 && airports.map((aeroport) => (
              <tr key={aeroport.PlaceName}>
                <td>{aeroport.PlaceName}</td>
                <td>{aeroport.CountryName}</td>
              </tr>
            ))}
          </tbody>
        </table>
     

      </Wrapper>
    </div>
  );
}

export default Airports;
