import React from "react"
import '../myCSS/booking.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
const Vol: React.FC = (Props) => {
    return (
        <div className="wrapper bg-white">

            <form action="#">
                <div className="form-group d-sm-flex margin">
                    <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
                        <input type="text" required placeholder="From" className="form-control" />
                        <div className="label" id="from"></div>
                        <span className="fas fa-dot-circle text-muted"></span>
                    </div>
                    <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                        <input type="text" required placeholder="To" className="form-control" />
                        <div className="label" id="to"></div>
                        <span className="fas fa-map-marker text-muted"></span>
                    </div>
                </div>
                <div className="form-group d-sm-flex margin">
                    <div className="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
                        <input type="date" required placeholder="Depart Date" className="form-control" />
                        <div className="label" id="depart"></div>
                    </div>
                    <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                        <input type="date" required placeholder="Return Date" className="form-control" />
                        <div className="label" id="return"></div>
                    </div>
                </div>
                <div className="form-group border-bottom d-flex align-items-center position-relative">
                    <input type="text" required placeholder="Traveller(s)" className="form-control" />
                    <div className="label" id="psngr"></div>
                    <span className="fas fa-users text-muted"></span>
                </div>
                <div className="form-group my-3">
                    <div className="btn rounded-0 d-flex justify-content-center text-center p-3" >recherche Flights
                    </div>
                </div>
            </form>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-6">
                        <div className="card border-0">
                            <div className="card-body d-flex flex-column justify-content-between text-white p-0">
                                <div className="p-4 bg-top">
                                    <div className="d-flex flex-row justify-content-between">
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <h1>IND</h1><span className="mb-2">Indianapolis</span><span>Thu, Aug 17</span><span>07:00 PM</span></div>
                                        <div className="d-flex flex-column justify-content-center"><i className="fa fa-plane fa-3x"></i></div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <h1>CDG</h1><span className="mb-2">Paris</span><span>Thu, Aug 17</span><span>03:00 AM</span></div>
                                    </div>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>)
}
            export default Vol;

