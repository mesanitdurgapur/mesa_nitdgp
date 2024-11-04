import React from "react";
import './eventcard.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EventCard({ eventName, eventTime, eventVenue, imageSrc, toastContent }) {
  const showToast = () => {
    const toastEl = document.getElementById(`toast-${eventName}`);
    const toast = new window.bootstrap.Toast(toastEl, {
      autohide: false,
    });
    toast.show();
  };
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset from the original trigger point
    });
  }, []);

  return (
    <>
      {/* Card Layout */}
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" data-aos="zoom-out">
        <div className="card">
          <img src={imageSrc} className="card-img-top" alt={eventName} height={259}/>
          <div className="card-body">
            <h5 className="card-title">{eventName}</h5>
            <p className="card-text">
              <strong>Timings: </strong>{eventTime} <br />
              <strong>Venue: </strong>{eventVenue}
            </p>
            <button onClick={showToast} className="btn btn-primary">
              More info
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div className="toast-container position-fixed top-50 start-50 translate-middle">
      <div id={`toast-${eventName}`} className="toast" role="alert" aria-live="assertive" aria-atomic="true">

          <div className="toast-header" style={{ backgroundColor: "#fff" }}>
            <strong className="me-auto">{eventName}</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="toast-body"
            style={{ textAlign: "center", padding: "30px" }}
          >
            {toastContent}
          </div>
        </div>
      </div>
    </>
  );
}

