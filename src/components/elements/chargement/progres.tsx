import React from "react"
import './progres.css'
const Progres: React.FC = (Props) => {
    return (
        <div className="cs-loader">
            <div className="cs-loader-inner">
                <label>●</label>
                <label>●</label>
                <label>●</label>
                <label>●</label>
                <label>●</label>
                <label>●</label>
            </div>
        </div>
    )
}
export default Progres;