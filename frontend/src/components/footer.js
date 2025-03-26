import React from "react";
import "./footer.css";

const currYear = new Date().getFullYear();

export default function footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col" id="footer-col ">
            <h4>
              mechanical engineering <br /> students association, <br /> nit
              durgapur
            </h4>
            <span>©{currYear} MESA.All rights reserved</span>
          </div>
          <div className="footer-col">
            <h4>contact us</h4>
            <ul>
              <li>
                <a
                  href="https://maps.app.goo.gl/qSyidRnBXd3zN7DZ8"
                  target="blank"
                >
                  <i className="fa-solid fa-location-dot" /> Nit Durgapur
                </a>
              </li>
              <li>
                <a href="tel:+917607549708">
                  <i className="fa-solid fa-phone" /> +91 7607549708
                </a>
              </li>
              <li>
                <a href="mailto:mesa.me@nitdgp.ac.in" id="email">
                  <i className="fa-solid fa-envelope" /> mesa.me@nitdgp.ac.in
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>useful links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/event">Events</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/mesa-nitdgp/">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="https://www.instagram.com/mesa_nitdgp?igsh=MXFqaDd5MnR5MGtqNQ%3D%3D">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://www.facebook.com/mesanitdurgapur">
                <i className="fa-brands fa-facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
