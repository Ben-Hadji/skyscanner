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
                itineraryId: '13542-2302070850--32171-0-12712-2302071155|12712-2302141946--32171-0-13542-2302150750',
                adults: '1',
                currency: 'USD',
                countryCode: 'US',
                market: 'en-US'
            },
            headers: {
                "Access-Control-Allow-Origin": '*',
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
                            <td>{flightDetails?.legs[0].arrival}</td>
                            <td>{flightDetails?.legs.length}</td>
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