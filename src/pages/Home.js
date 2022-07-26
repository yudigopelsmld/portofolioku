import React from 'react';
import { homeData } from '../data/homeData'


const Home = (props) => (
    <div>
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>{props.users.name}</h1>
                <p>{props.users.email}</p>
            </div>
        </section>
    </div>
    )

export default Home