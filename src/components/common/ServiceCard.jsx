import React from "react";

const ServiceCard = ({ service }) => {

    return (
        <div className="service" data-name={service.name}>
            <div className="service-image">
                <img src={service.icon} alt={service.name} />
            </div>
            <div className="service-name"><p>{service.name}</p></div>
        </div>
    )
}

export default ServiceCard;