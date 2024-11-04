import React from 'react'
import "./home.css"
import fa1 from "../assets/fa1.jpg";
import fa2 from "../assets/fa2.jpeg";
import pic1 from "../assets/swiper/pic1.jpeg"
import pic2 from "../assets/swiper/pic2.jpeg"
import pic3 from "../assets/swiper/pic3.jpeg"
import pic4 from "../assets/swiper/pic4.jpeg"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset from the original trigger point
    });
  }, []);

  return (
   
    <>
      <div className="slider">
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
    data-bs-pause="false"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide-to="0"
        class="active"
        aria-label="Slide 1"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={pic2} alt="" />
      </div>
      <div class="carousel-item">
        <img src={pic3} alt="" />
      </div>
      <div class="carousel-item">
        <img src={pic4} alt="" />
      </div>
      <div class="carousel-item">
        <img src={pic1} alt="" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

     <div className='abtfac'>
     <div className='about-sec'>
      <section className="about-us" >
        <h1 className="heading">
          About <span className="highlights">us</span>
        </h1>
        <div className="about-content" />
        <p data-aos="fade-down">
        Welcome to the Mechanical Engineering Student Association (MESA), the official student body of the Mechanical Engineering Department. With a commitment to fostering innovation, learning, and collaboration, MESA enriches the academic and professional journey of every mechanical engineering student. Through events like technical workshops, industry guest lectures, hands-on projects, and competitions, we bridge the gap between theory and practice, empowering students with essential skills and industry insights.
        </p>
        <br />
        <p data-aos="fade-up">
        Join us in shaping the future of mechanical engineering, one project, one workshop, and one innovation at a time!  MESA’s mission is to support and guide students in developing technical expertise, leadership abilities, and meaningful connections. We strive to cultivate a strong community and shared purpose, shaping the future of mechanical engineering through each project, workshop, and innovation.
        </p>
      </section>
      </div>
      
      <div className='fac-sec'>
      <section className="faculty-advisors">
        <h1 className="heading">Faculty <span className="highlights">advisors</span></h1>
        <div className="fac-container">
          <div className="fac-box" data-aos="fade-right">
            <img src={fa1} alt="" />
            <div className="fac-info">
              <div className="fac-text">
                <a href="https://nitdgp.ac.in/department/mechanical-engineering/faculty-11/sujit-karmakar" target='blank'><span>Asst Prof.Sujit Karmakar</span></a> <br />
                <span class="highlights">Faculty advisor</span>
              </div>
            </div>
          </div>
          <div className="fac-box" data-aos="fade-left">
            <img src={fa2} alt="" />
            <div className="fac-info">
              <div className="fac-text">
                <a href="https://nitdgp.ac.in/department/mechanical-engineering/faculty-11/deepak-kumar" target='blank'><span>Asst Prof. Deepak Kumar</span></a> <br />
                <span class="highlights">Faculty advisor</span>
              </div>
            </div>
          </div>
        </div>
        </section>
     </div>
      
      </div>
     
    </>
  )
}
