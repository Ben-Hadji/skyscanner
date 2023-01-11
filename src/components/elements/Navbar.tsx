import React from "react"
import { Link, useNavigate } from 'react-router-dom'
import '../myCSS/nav.css'

const NavBar: React.FC = (Props) => {
    return (
        <div>
            <nav>
                
                <label className="logo">BEN</label>
                <ul>
                    <li><Link className="active" to="/">Aeroports</Link></li>
                    <li><Link to="/vols">Vols</Link></li>
                    <li><Link to="/details">Details Vols</Link></li>
                </ul>
            </nav>
            <div className="floating-text">
                good trip
            </div>
        </div>
        )
}
export default NavBar;