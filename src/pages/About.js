import React from 'react';
import Facts from './Facts';
import Skill from './Skill';
import { homeData } from '../data/homeData'
import { aboutData } from '../data/aboutData'

const About = (props) => (
    <div>
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About Me</h2>
          <p>{props.isiData.tentang}</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={`http://127.0.0.1:8000/gambar/${props.isiData.photo}`} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{props.isiData.headline}</h3>
            <p className="fst-italic">
            {props.isiData.quote1}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{props.isiData.lahir}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{props.isiData.website}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{props.isiData.phone}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{props.isiData.alamat}</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{props.isiData.umur}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{props.isiData.gelar}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{props.isiData.email}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Negara:</strong> <span>{props.isiData.negara}</span></li>
                </ul>
              </div>
            </div>
            <p>
            {props.isiData.quote2}
            </p>
          </div>
        </div>

      </div>
    </section>
    <Facts fact  = {props.isiData.motto}/>
    <Skill token  = {props.isiToken}/>
    </div>
    )

export default About