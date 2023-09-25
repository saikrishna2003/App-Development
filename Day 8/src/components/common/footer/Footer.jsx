
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blog, navList, socialIcon } from "../../data/Data"
import "./footer.css";
import emailjs from "@emailjs/browser"; // Make sure you have installed the emailjs library

const Footer = () => {
  const [email, setEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault(); // Prevent the default form submission

    // Check if the email field is not empty before sending the email
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    const formElement = document.querySelector("#emailForm");

    // Replace these with your actual EmailJS service and template IDs
    const serviceId = "service_0ljy8is";
    const templateId = "template_2yohpg9";

    emailjs
      .sendForm(serviceId, templateId, e.target, "7-FjaNsZo7DvVE7Lr")
      .then(
        (result) => {
          console.log("Email sent successfully", result);
          // Optionally, clear the email input field after successful submission
          setEmail("");

          // You can display a success message or take other actions here
        },
        (error) => {
          console.error("Error sending email:", error);

          // You can display an error message or take other actions here
        }
      );
  }

   
  return (
    <>
      <footer>
        <div className='scontainer'>
          <div className='newletter flexSB'>
            <h1 className='row'>SUBSCRIBE NEWSLETTER</h1>
            <div className='input flex row'>
              <input onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='Enter your email' value={email} />
              <button className='btn1'onClick={sendEmail}>SUBSCRIBE NOW</button>
            </div>
          </div>

          <div className='content grid'>
            <div className='items'>
              <h3>ABOUT KIDZ STOP</h3>
              <p>Kidz Stop is a vibrant online platform dedicated to providing enriching educational and storytelling content for children. With a wide array of interactive lessons, fun quizzes, and captivating stories, it fosters a love for learning in young minds.</p>
            </div>

            <div className='items'>
              <h3>CONTACT US</h3>
              <h4>
                <span>ADDRESS: </span>8638 Amarica Stranfod Mailbon Star, California, TX 70240
              </h4>
              <h4>
                <span>MAIL: </span>kidzstop@gmail.com
              </h4>
              <h4>
                <span>PHONE: </span>+91 234 567 2345
              </h4>
              <h4>
                <span>FAX ID: </span>+91 208 8197463
              </h4>
            </div>

            <div className='items'>
              <h3>LINKS</h3>
              <ul>
                {navList.map((val, index) => {
                  return (
                    <li>
                      <Link to={val.path}>{val.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className='items blogs'>
              <h3>MORE</h3>

              {/* {blog.slice(0, 2).map((val, index) => (
                <div className='box flex' key={index}>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h5>{val.name}</h5>
                    <span>{val.date}</span>
                  </div>
                </div>
              ))} */}
              
             <p>
               <a href="/pp" style={{color: "white"}}>Privacy Policy</a>
              </p>
              <p>
                <a href="/faq" style={{color: "white"}}>FAQ</a>
              </p>
              
              <p>
                <a href="/tc" style={{color: "white"}}>Terms and Conditions</a>
              </p>
              
            </div>
          </div>
        </div>
      </footer>

      <section className='legal'>
        <div className='scontainer flexSB'>
          <div className='logo'>
            <img src='../images/logo5.png' alt='' />
          </div>
          <p>Copyright © KidzStop 2023.</p>

          <div className='social'>
            {socialIcon.map((val) => {
              return <span>{val.icon}</span>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer