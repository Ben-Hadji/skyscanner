import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FlightDetails } from '../../types/types'
import Wrapper from '../styles/Wrapper'; 



export interface Props { }
const DetailsVols: React.FC = (Props) => {
    const [flightDetails, setFlightDetails] = useState<FlightDetails>();
    const getFlightsDetails = () => {

        const options = {
            params: {
                itineraryId: '13554-2302071945--32480-0-12712-2302072245|11442-2302142130--32480-0-13554-2302150910',
                legs: '[{"origin":"LHR","destination":"JFK","date":"2023-02-07"},{"date":"2023-02-14","destination":"LHR","origin":"EWR"}]',
                //adults: '1',
                //currency: 'USD',
                //countryCode: 'US',
                //market: 'en-US'
            },
            headers: {
                "Access-Control-Allow-Origin": '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
                'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
            }
        };
        axios.get('https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails', options)
            .then((res) => {
                
                console.log(res.data)
                console.log('bebe')
                setFlightDetails(res.data)
            })
            .catch((err) => {
                console.log(err)
                console.log('bebe err')
            })
    }
    useEffect(() =>
        getFlightsDetails()
        )
        

    return (
        <div className="App">
            <h3>details</h3>
            <Wrapper>
                <h1></h1>
                
                <table>
                    <thead>
                        <tr>
                            <td>vol</td>
                            <td>rien</td>
                        </tr>     
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </Wrapper>
        </div>
    )
}

export default DetailsVols;