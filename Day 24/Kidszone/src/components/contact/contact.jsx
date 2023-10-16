import React from "react"
import "./contact.css";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
const Contact = () => {
  return (
    <>
    <Header/>
        <h1>Contact Support</h1>
      <section className="about-section">
        <p>We're happy to answer any questions you may have! Please fill out the support form below, and a member of our support staff will respond as soon as possible.</p>
      </section>

      <section className="contact-form-section">
        <form id="contact-form">
          <label htmlFor="email">Your email address *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="full-name">Full name *</label>
          <input type="text" id="full-name" name="full-name" required />

          <label htmlFor="subject-line">Subject line *</label>
          <input type="text" id="subject-line" name="subject-line" required />
          <label htmlFor="message">Message *</label>
<div>
          <textarea id="message" name="message" rows="4" required></textarea></div>
<div>
          <label htmlFor="attachments">Attachments</label>
          <input type="file" id="attachments" name="attachments" multiple /></div>

          <button type="submit">Submit</button>
        </form>
      </section>
    <Footer/>
           
    </>
  )
}

export default Contact;
