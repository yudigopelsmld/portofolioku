import React from 'react';
import { aboutData } from '../data/aboutData'

const Contact = (props) => (
    <div>
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact details that can be reached</p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{props.isiData.alamat}, {props.isiData.negara}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{props.isiData.email}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{props.isiData.phone}</p>
              </div>

            </div>

          </div>

          <div className="col-lg-6 d-flex align-items-stretch">
          <img src={`http://127.0.0.1:8000/gambar/${props.isiData.photo}`} className="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>
    </div>
    )

export default Contact