import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flight } from '../../types/types';
import Wrapper from '../styles/Wrapper';

interface IFlight {
    loading: boolean;
    flights: Flight[];
    errorMsg: string;
}

const getFlights = () => {
    const options = {
        method: 'GET',
        params: {
            origin: 'LOND',
            destination: 'NYCA',
            date: '2023-02-07',
            adults: '1',
            currency: 'USD',
            countryCode: 'US',
            market: 'fr-FR'
        },
        headers: {
            'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
            'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
    };
    return axios.get('https://skyscanner50.p.rapidapi.com/api/v1/searchFlights', options)
}
const Vols: React.FC = (Props) => {
    const [flight, setFlight] = useState<IFlight>({
        loading: false,
        flights: [] as Flight[],
        errorMsg: "",
    });


    useEffect(() => {
        setFlight({ ...flight, loading: true });
        getFlights()
            .then((res) =>
                setFlight({
                    ...flight,
                    loading: false,
                    flights: res.data.data,

                }
                )
            )
            .catch((err) =>
                setFlight({
                    ...flight,
                    loading: false,
                    errorMsg: err.message,
                })
            );
    }, []);

    const { loading, flights, errorMsg } = flight;



    return (
        <div className="App">
            <h3>CECI EST UN TEST</h3>
            <Wrapper>
                <h1>All Flights </h1>
                {errorMsg && <p>{errorMsg}</p>}
                {loading && <h1>Loading...</h1>}
                <table>
                    <thead>
                        <tr>
                            <td>origin</td>
                            <td>destinantion</td>
                            <td>Price</td>
                            <td>duration</td>
                        </tr>
                    </thead>
                    <tbody>
                        {flights?.length > 0 && flights.map((vol, index) => (

                            <tr key={index}>
                                <td>{vol.legs[0].origin.name}</td>
                                <td>{vol.legs[0].destination.name}</td>
                                <td>{vol.price.amount}</td>
                                <td>{vol.totalDuration}</td>

                            </tr>

                        ))}
                    </tbody>
                </table>


            </Wrapper>
        </div>
    );
}

export default Vols;
