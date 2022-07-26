import React from 'react';
import { aboutData } from '../data/aboutData';
import { homeData } from '../data/homeData'
import { resumeData } from '../data/resumeData'

const Resume = () => (
<div>
  <section id="resume" className="resume">
  <div className="container">

    <div className="section-title">
      <h2>Resume</h2>
      <p>Daftar Pekerjaan dan Pendidikan</p>
    </div>

    <div className="row">
      
      <div className="col-lg-6" data-aos="fade-up">

        <h3 className="resume-title">Summary</h3>
        <div className="resume-item pb-0">
          <h4>{homeData.title}</h4>
          <p><em>{aboutData.about2}</em></p>
          <ul>
            <li>{aboutData.kota}, {aboutData.negara}</li>
            <li>{aboutData.telpon}</li>
            <li>{aboutData.email}</li>
          </ul>
        </div>

        <h3 className="resume-title">Education</h3>
        <div className="resume-item">
          <h4>{resumeData.jurusan1}</h4>
          <h5>{resumeData.tahun1}</h5>
          <p><em>{resumeData.sekolah1}</em></p>
          <p>{resumeData.detail1}</p>
        </div>

        <div className="resume-item">
          <h4>{resumeData.jurusan2}</h4>
          <h5>{resumeData.tahun2}</h5>
          <p><em>{resumeData.sekolah2}</em></p>
          <p>{resumeData.detail2}</p>
        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 className="resume-title">Professional Experience</h3>

        <div className="resume-item">
            <h4>{resumeData.jabatan5}</h4>
            <h5>{resumeData.thnjabat5}</h5>
            <p><em>{resumeData.perusahaan5} </em></p>
            <ul>
              <li>{resumeData.tugas5}</li>
            </ul>
          </div>

          <div className="resume-item">
            <h4>{resumeData.jabatan4}</h4>
            <h5>{resumeData.thnjabat4}</h5>
            <p><em>{resumeData.perusahaan4} </em></p>
            <ul>
              <li>{resumeData.tugas4}</li>
            </ul>
          </div>

        <div className="resume-item">
            <h4>{resumeData.jabatan3}</h4>
            <h5>{resumeData.thnjabat3}</h5>
            <p><em>{resumeData.perusahaan3} </em></p>
            <ul>
              <li>{resumeData.tugas3}</li>
            </ul>
          </div>

          <div className="resume-item">
            <h4>{resumeData.jabatan2}</h4>
            <h5>{resumeData.thnjabat2}</h5>
            <p><em>{resumeData.perusahaan2} </em></p>
            <ul>
              <li>{resumeData.tugas2}</li>
            </ul>
          </div>
            
          <div className="resume-item">
            <h4>{resumeData.jabatan1}</h4>
            <h5>{resumeData.thnjabat1}</h5>
            <p><em>{resumeData.perusahaan1} </em></p>
            <ul>
              <li>{resumeData.tugas1}</li>=
            </ul>
          </div>
      </div>
    </div>

  </div>
  </section>
</div>
    )

export default Resume