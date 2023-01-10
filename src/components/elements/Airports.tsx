import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Airport } from '../../types/types';
import Wrapper from '../styles/Wrapper';
import Form from '../styles/Form';
import Search from '../styles/Search'
import Button from '../styles/Button'
import '../myCSS/aeroport.css'
import Progres from './chargement/progres'



const Airports: React.FC = (Props) => {
    const [search, setSearch] = useState<string>("hahaya");

    interface IAirport {
        loading: boolean;
        airports: Airport[];
        errorMsg: string;
    }

    const getAirports = async () => {
        const val = search;
        const options = {
            params: { query: val },
            headers: {
                "Access-Control-Allow-Origin": '*',
                'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
                'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
            }
        };

        return await axios.get('https://skyscanner50.p.rapidapi.com/api/v1/searchAirport', options)
    }



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const [airport, setAirport] = useState<IAirport>({
        loading: false,
        airports: [] as Airport[],
        errorMsg: "",
    });

    useEffect(() => {
        setAirport({ ...airport, loading: true });
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
    }, [airport.airports.length]);

    const { loading, airports, errorMsg } = airport;



    return (
        <div className="App">
            <h3>CECI EST UN TEST</h3>
            <Wrapper>
                <h1>Airports</h1>
                <Form onSubmit={getAirports}>
                    <Search
                        type="text"
                        placeholder='Recherche'
                        value={search}
                        onChange={handleChange} />
                    <Button type='submit'> Rechercher </Button>
                </Form>
                {errorMsg && <p>{errorMsg}</p>}
                {loading && <Progres />}

                {airports.length === 0 && <h4>VEUILLEZ PATIENTER UN INSTANT</h4>}

                {airports.length > 0 && airports.map((aeroport, index) => (
                    <div className="aero-container" key={index}>
                        <div className="aero">
                            <div className="aero-preview">
                                <h6>city</h6>
                                <h2>{aeroport.CityName}</h2>
                                <span>{aeroport.CountryName}</span>
                            </div>
                            <div className="aero-info">

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




 