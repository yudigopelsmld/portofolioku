import React from 'react';
import { homeData } from '../data/homeData'

const Home = () => (
    <div>
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>{homeData.title}</h1>
                <p>{homeData.description}</p>
            </div>
        </section>
    </div>
    )

export default Home