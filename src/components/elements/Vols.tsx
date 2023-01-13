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
    const [destination, setDestination] = useState<string>("")
    const [adults, setAdults] = useState<string>("")
    const [aller, setAller] = useState<string>("")

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
                destination: destination,
                date: aller,
                adults: adults,
                currency: 'USD',
                countryCode: 'US',
                market: 'fr-FR'
            },
            headers: {
                'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
                'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
            }
        };

        const res = await axios.get("https://skyscanner50.p.rapidapi.com/api/v1/searchFlights", options);

        setFlight({
            flights: res.data.data as Flight[],
            loading: false,
            errorMsg: res.data.message,
            status: res.data.status
        });
    };

    const handleChangeOrigine = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrigin(e.target.value);
    };
    const handleChangeDestination = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDestination(e.target.value)
    }
    const handleChangeAdults = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdults(e.target.value)
    }
    const handleChangeAller = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAller(e.target.value)
    }

    const { loading, flights, errorMsg, status } = flight;

    return (
        <div className="deb">
            <Wrapper>
                <h1>trouver votre vol</h1>
                <Form onSubmit={getFlights}>
                    <div>
                        <Search type="text" required placeholder="origin" value={origin} onChange={handleChangeOrigine} />
                        <Search type="text" required placeholder="Destination" value={destination} onChange={handleChangeDestination} />
                    </div>
                    <div>
                        <Search type="date" required placeholder="Destination" value={aller} onChange={handleChangeAller} />
                        <Search type="number" required placeholder="adultts" min="1" value={adults} onChange={handleChangeAdults} />
                    </div>

                    <Button type="submit"> Rechercher </Button>


                </Form>
                {status === false && <span>it seems that a problem occurred {":"}</span>}
                {status === false && <p>{errorMsg}</p>}
                {loading && <Progres />}
                                
               
                {flights?.length > 0 &&
                    flights?.map((vol, index) => (
                        <div className="aero-container" key={index}>
                            <div className="aero">
                                <div className="aero-preview">
                                    
                                    <h6>depart</h6>
                                    <h2>{vol.legs[0].departure}</h2>
                                    
                                    <h6>price</h6>
                                    <h2>{vol.price.amount}</h2>
                                </div>
                                <div className="aero-info">
                                <h6>city</h6>
                                <h6>depart</h6>
                                    <h6>origine</h6>
                                    <h2>{vol.legs[0].origin.name}</h2>
                                    <h6>destination</h6>
                                    <h2>{vol.legs[0].destination.name}</h2>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
            </Wrapper>
        </div>
    );
};

export default Vols;
