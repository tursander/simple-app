import React from "react";

const Service = (props) => {
    const service = props.service;
    return (
        <div className="single-service">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
        </div>
    );
}
 
export default Service;