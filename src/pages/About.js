import React from 'react';
import Facts from './Facts';
import Skill from './Skill';
import { homeData } from '../data/homeData'
import { aboutData } from '../data/aboutData'

const About = () => (
    <div>
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About Me</h2>
          <p>{aboutData.about}</p>
          <p>{aboutData.about2}</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={homeData.imageprofile} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{homeData.description}</h3>
            <p className="fst-italic">
            {aboutData.quote}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{aboutData.lahir}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{aboutData.website}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{aboutData.telpon}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{aboutData.kota}</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{aboutData.umur}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{aboutData.pendidikan}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{aboutData.email}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Negara:</strong> <span>{aboutData.negara}</span></li>
                </ul>
              </div>
            </div>
            <p>
            {aboutData.quote2}
            </p>
          </div>
        </div>

      </div>
    </section>
    <Facts/>
    <Skill/>
    </div>
    )

export default About