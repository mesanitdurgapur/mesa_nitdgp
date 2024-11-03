import React from 'react'
import './contact.css'
import {ContactUs} from '../components/emailbox'

export default function contact() {
  return (
    <section className='main'>
      <div className='container-fluid'>
      <div>
        <h1>CONTACT <span className="highlights">PAGE</span></h1>
      </div>
      <div className="container contact-sec">
        <div className="row justify-content-center align-items-center">
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='contact-left container-fluid'>
              <div> <h3 ><i className="fa-solid fa-location-dot" /> &nbsp; <span className="highlights">location</span></h3> <p> <a href="https://maps.app.goo.gl/qSyidRnBXd3zN7DZ8" target='blank'> National Institute of Technology Durgapur , West Bengal , India</a></p>
              </div>
              <div> <h3><i className="fa-solid fa-phone" /> &nbsp; <span className="highlights">contact details</span></h3> <p>Tushar Vishwakarma : <span className="bold">+91 7607549708</span> <br />
              Mayank Singh : <span className="bold">+91 7307348597</span></p>
              </div>
              <div> <h3><i className="fa-solid fa-envelope" /> &nbsp;<span className="highlights">mail</span> </h3> <p className='bold'>mesa.me@nitdgp.ac.in</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className="contact-left"> <ContactUs /> </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
