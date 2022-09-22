import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./ContactSection.css";

function ContactSection() {
  const notify = () => toast.success("Message sent successfully", {
    className: 'toast-message'
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_chij6nc', 'template_svbn3nj', form.current, '0g6jyMpxBoOx5ykn3')
      .then((result) => {
          console.log(result.text);

      }, (error) => {
          console.log(error.text);

      });

      e.target.reset();
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-part">
        <div className="contact-header">
          <div className="hr-part"></div>
          <span>Contact Me</span>
          <div className="hr-part"></div>
        </div>

        <div className="contact-details">
          <div className="contact-email">
            <i class="fa-solid fa-envelope"></i>
            <span>sarasasilva2002@gmail.com</span>
          </div>

          <div className="contact-number">
            <i class="fa-solid fa-square-phone"></i>
            <span>+94766094516</span>
          </div>
        </div>

        <div className="contact-boxes">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input type="text" name="Name" placeholder="Your Name" required />
            </div>

            <div>
              <input type="email" name="Email" placeholder="Your E-mail" required />
            </div>

            <div className="message-box">
              <textarea name="Message" placeholder="Your Message" required></textarea>
            </div>

            <button className="contact-boxes-button" onClick={notify}>Submit</button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;