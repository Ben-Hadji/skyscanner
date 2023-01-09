import React from "react"
import '../myCSS/nav.css'

const NavBar: React.FC = (Props) => {
    return (
        <body>
            <nav>
                <label className="logo">BEN</label>
                <ul>
                    <li><a className="active" href="#">Aeroports</a></li>
                    <li><a href="#">Vols</a></li>
                    <li><a href="#">Details Vols</a></li>
                </ul>
            </nav>
            <div className="floating-text">
                good trip
            </div>
        </body>
        )
}
export default NavBar;