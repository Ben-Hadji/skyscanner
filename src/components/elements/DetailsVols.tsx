import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FlightDetails } from '../../types/types'
import Wrapper from '../styles/Wrapper'; 
import Form from "../styles/Form";
import Search from "../styles/Search";
import Button from "../styles/Button";

export interface Props { }
const DetailsVols: React.FC = (Props) => {
    const [search, setSearch] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    interface IDetails {
        loading: boolean;
        details: FlightDetails;
        errorMsg: string;
    }
    const [details, setDetails] = useState<IDetails>({
        loading: false,
        details: {} as FlightDetails,
        errorMsg: ""

    });
    const getFlightDetails = async() => {

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
        const res = await axios.get('https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails', options)
        console.log(res)
        setDetails({
            details: res.data.data as FlightDetails,
            loading: false,
            errorMsg: res.data.message[0].query,
        });
    }
    
        

    return (
        <div className="deb">
            
            
            <Wrapper>
            <br/>
                <h1>Details du vol</h1>
                
                <Form onSubmit={getFlightDetails}>
                    <Search type="text" placeholder="Recherche" value={search} onChange={handleChange} />
                    <Button type="submit"> Rechercher </Button>
                </Form>
                
            </Wrapper>
        </div>
    )
}

export default DetailsVols;