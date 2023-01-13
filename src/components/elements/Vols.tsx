import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Flight } from "../../types/types";
import Wrapper from "../styles/Wrapper";
import Form from "../styles/Form";
import Search from "../styles/Search";
import Button from "../styles/Button";
import "../myCSS/aeroport.css";
import Progres from "./chargement/progres";


import '../myCSS/booking.css'


const Vols: React.FC = (Props) => {
    const [origin, setOrigin] = useState<string>("");

    interface IFlight {
        loading: boolean;
        flights: Flight[];
        errorMsg: string;
        status: boolean;
    }

    const [flight, setFlight] = useState<IFlight>({
        loading: false,
        flights: [] as Flight[],
        errorMsg: "",
        status: true,
    });

    const getFlights = async (e: React.FormEvent) => {
        e.preventDefault();
        const options = {
          method: 'GET',
          params: {
              origin: origin,
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
        console.log('yes')
        const res = await axios.get("https://skyscanner50.p.rapidapi.com/api/v1/searchFlights", options);
        
        setFlight({
            flights: res.data as Flight[],
            loading: false,
            errorMsg: res.data.message,
            status: res.data.status
        });
        console.log(res.data.message)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrigin(e.target.value);
    };

    const { loading, flights, errorMsg , status} = flight;

    return (
        <div className="deb">
            <Wrapper>
                <h1>flights</h1>
                <Form onSubmit={getFlights}>
                    <Search type="text" required placeholder="origin" value={origin} onChange={handleChange} />
                    <Button type="submit"> Rechercher </Button>
                </Form>
                {status === false && <span>it seems that a problem occurred {":"}</span>}
                {errorMsg && <p>{errorMsg}</p>}
                {loading && <Progres />}

                

                {flights?.length > 0 &&
                    flights?.sort((a, b) => a.price > b.price ? 1 : -1)
                        .map((vol, index) => (
                            <div className="aero-container" key={index}>
                                <p>{flights.length}</p>
                                <div className="aero">
                                    <div className="aero-preview">
                                        <h6>city</h6>
                                        <h2>{vol.legs[0].origin.name}</h2>
                                        <span>{vol.legs[0].duration}</span>
                                    </div>
                                    <div className="aero-info">
                                        <h6>flight</h6>
                                        <h2>{vol.price.amount}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
            </Wrapper>
        </div>
    );
};

export default Vols;
