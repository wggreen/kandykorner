import React from "react"
import "./Locations.css"

export default ({location}) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <div className="location__sqft">Square footage: {location.sqft}</div>
        <div className="location__handicap">{location.handicap ? "Handicap accessible" : "Not handicap accessible"}</div>
    </section>
)