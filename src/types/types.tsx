//Airport

export interface Airport {
    PlaceId: string,
    PlaceName: string,
    CountryId: string,
    CityId: string,
    IataCode: string,
    CountryName: string,
    CityName: string, 
}

//Flight
export type Leg= {
    id: string,
    origin: Place,
    destination: Place,
    stop_count ?: number,/*escal...pas sûr de le garder*/
    departure: string,
    arrival: string,
    duration: number, 
    flightNumber ?: string, 
    operatingCarrier ?: Carrier,
}

export type Flight = {
    id: string;
    price: Price,
    legs: Leg[],
    totalDuration: number,
}

export type Price = {
    amount: number,
    update_status: string,
    last_updated: string,
    quote_age: number,
    score: number,
    transfer_type: string
}

export type FlightDetails = {
    legs: Details[],
    pricingOptions: any[],
    linked: any
}

export type Details = {
    id: string,
    origin: Place,
    destination: Place,
    segments: Leg[],
    layovers: LayOver[],
    duration: number,
    stopcount: number, 
    departure: string,
    arrival: string,
    daychange ?: number
    
}

//FlightDetails
export type Place = {
    id: number,
    name: string,
    displayCode ?: string,
    city ?: string
    display_code ?: string,
    alt_id ? : string,
}

export type Carrier = {
    id: string,
    name: string,
    altId: string,
}

export type LayOver = {
    segmentId: string,
    origin: Place,
    destination: Place,
    duration: number,
    }

