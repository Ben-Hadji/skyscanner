import React from "react"
import { Link} from 'react-router-dom'
import '../myCSS/nav.css'

const NavBar: React.FC = (Props) => {
    return (
        <div>
            <nav>
                
                <label className="logo">Skyscanner</label>
                <ul>
                    <li><Link className="active" to="/">Aeroports</Link></li>
                    <li><Link to="/vols">Vols</Link></li>
                    <li><Link to="/details">Details Vols</Link></li>
                </ul>
            </nav>
            <div className="floating-text">
                your smile mean everything
            </div>
        </div>
        )
}
export default NavBar;