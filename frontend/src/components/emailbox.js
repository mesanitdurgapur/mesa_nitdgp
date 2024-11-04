import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './emailbox.css';

export const ContactUs = () => {
  const form = useRef();
  const toastRef = useRef(); // Ref for toast

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v6pj4j8', 'template_22mobw1', form.current, '3kyWaAD-f-jy1CLfh')
      .then(
        () => {
          console.log('SUCCESS!');
          showToast('Email sent successfully!'); // Show success toast
        },
        (error) => {
          console.log('FAILED...', error.text);
          showToast('Failed to send email. Please try again.', true); // Show error toast
        },
      );
  };

  const showToast = (message, isError = false) => {
    const toastElement = new window.bootstrap.Toast(toastRef.current);
    toastRef.current.querySelector('.toast-body').textContent = message;
    toastRef.current.classList.toggle('bg-danger', isError);
    toastRef.current.classList.toggle('bg-success', !isError);
    toastElement.show();
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="submit" id="liveToastBtn" />
      </form>

      <div className="toast-container"
      style={{ 
        position: 'fixed', 
        top: '0', 
        right: '0', 
        zIndex: 1050,
        width:'90%', 
      }}>
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          ref={toastRef}
        >
          <div className="toast-header">
            <strong className="me-auto">Notification</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">Toast message here</div>
        </div>
      </div>
    </div>
  );
};
