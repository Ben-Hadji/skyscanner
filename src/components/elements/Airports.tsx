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
        <h1>Airports</h1>
        {errorMsg && <p>{errorMsg}</p>}
        {loading && <h1>Loading...</h1>}
        {airports.length}
        
          
              {airports.length > 0 && airports.map((aeroport, index) => (
                  <div className="courses-container" key={index}>
                      <div className="course">
                          <div className="course-preview">
                              <h6>city</h6>
                              <h2>{aeroport.CityName}</h2>
                              <span>{aeroport.CountryName}</span>
                          </div>
                          <div className="course-info">

                              <h6>airport</h6>
                              <h2>{aeroport.PlaceName}</h2>

                          </div>
                      </div>
                  </div>
              ))}
         </Wrapper>
    </div>
  );
}

export default Airports;
