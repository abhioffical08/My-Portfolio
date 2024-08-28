import React from 'react';

const Contact = () => {
  return (

    <section className="section" id="contact">
      <div className="top-header" id='contact-1'>
        <h1>Get in touch</h1>
        <span>Do you have a project in mind?</span>
        <h3>Contact me here</h3>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h4><i class="uil uil-corner-right-down"> Talk to me </i></h4>
            <p><i className="uil uil-location-pin-alt"></i> Yerwada , Pune, Maharashtra, India</p>
            <p><i className="uil uil-envelope"></i> abhiofficial08@gmail.com</p>
            <p><i className="uil uil-phone"></i> +91 9373831521</p>
          </div>
        </div>

        <div className="col">

        <div class="form-inputs">

          <form action='https://formspree.io/f/xwpeyqrb' method='POST' className="form-control">

            <input type="text" name="name" id='name' placeholder="Your Full_Name" />
            <input type="text" name="contact" id='contact' placeholder="Contact_No" />
            <input type="email" name="email" id='email' placeholder="Your_Email" />
            <textarea name="message" rows="4" placeholder="Your_Message" id='message'></textarea>
            <button className="btn">Send Message <i className="uil uil-message"></i></button>
          
          </form>

        </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
