import React from 'react';
import { serviceData } from '../data/serviceData'

const Services = () => (
    <div>
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Layanan Jasa</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><i className="bi bi-briefcase"></i></div>
            <h4 className="title"><a href="">{serviceData.title1}</a></h4>
            <p className="description">{serviceData.description1}</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="bi bi-card-checklist"></i></div>
            <h4 className="title"><a href="">{serviceData.title2}</a></h4>
            <p className="description">{serviceData.description2}</p>
            </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="bi bi-bar-chart"></i></div>
            <h4 className="title"><a href="">{serviceData.title3}</a></h4>
            <p className="description">{serviceData.description3}</p>
            </div>

        </div>

      </div>
    </section>
    </div>
    )

export default Services