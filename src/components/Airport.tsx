import { Airport } from "../types/types";

interface AirportProps{
    airport: Airport;
}

const AirportItem: React.FC<AirportProps> = ({airport}) => {
    return(
        <p>{airport.PlaceName}</p>
    )
}

export default AirportItem