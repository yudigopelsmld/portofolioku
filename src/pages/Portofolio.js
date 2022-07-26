import React from 'react';

const Portofolio = () => (
    <div>
    <section id="portofolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Daftar Project</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/anjasmara.png" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/manggamanis.png" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/ependa.png" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
    )

export default Portofolio