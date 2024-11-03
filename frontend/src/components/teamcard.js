import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";
import "./teamcard.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProfileCard = ({ name, role, image,facebook,  instagram, linkedin }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset from the original trigger point
    });
  }, []);
  return (
    <div className="profile-card" data-aos="flip-left">
      <div className="profile-image">
        <img src={image} alt={name} height={300}/>
      </div>
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <div className="profile-socials">
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        
      </div>
    </div>
  );
};

export default ProfileCard;
