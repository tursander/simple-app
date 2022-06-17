import React from "react";
import Service from './About/Service';

const experts = {
    title: 'Expert Technicians',
    description: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.'
};
  
const support = {
    title: 'Great Support',
    description: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.'
};

const skills = {
    title: 'Technical Skills',
    description: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.'
};

function About() {
    return(
        <div className="content">
            <section>
                <h2>Why Choose Us</h2>
                <p>Who are in extremely love with eco friendly system.</p>
            </section>
            <div className="row">
                <Service service={experts} />
                <Service service={support} />
                <Service service={skills} />
            </div>
        </div>
    )
}

export default About;