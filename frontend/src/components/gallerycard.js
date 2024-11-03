import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Gallerycard({imgSrc, imgCaption }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset from the original trigger point
    });
  }, []);
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center' data-aos="zoom-in">
      <figure className="figure">
        <img src={imgSrc} className="figure-img img-fluid rounded" alt="..." width={300} />
        <figcaption className="figure-caption">{imgCaption}</figcaption>
      </figure>
    </div>
  )
}
