export interface Airport {
    PlaceId: string,
    PlaceName: string,
    CountryId: string,
    CityId: string,
    IataCode: string,
    CountryName: string,
    CityName: string, 
}

export type Leg= {
    id: string,
    origin: string,
    OriginCity ?: string, 
    destination: string,
    detinationCity ? : string,
    stop: number,/*escal...pas sûr de le garder*/
    departure: Date,
    arrival: Date,
    duration: number,
}

export type Flight = {
    id: string;
    price: number,
    legs: Leg[],
    totalDuration: number,
}