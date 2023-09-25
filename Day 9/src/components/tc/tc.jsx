import React from 'react';
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import "./tc.css";

class tc extends React.Component {
    constructor() {
        super();
        this.termsAndConditions = [
            {
                section: '1. Acceptance of Terms',
                content: 'By accessing or using Kidz Stops interactive storytelling and educational content services (referred to as the "Services"), you agree to be bound by these Terms and Conditions ("T&C"). If you do not agree to these T&C, please do not use our Services.',
            },
            {
                section: '2. Changes to Terms',
                content: 'Kidz Stop may revise these T&C at any time. The revised terms will be effective immediately upon being posted on our website. It is your responsibility to review these T&C periodically, and your continued use of our Services after any changes signifies your acceptance of the revised terms.',
            },
            {
                section: '3. Privacy Policy',
                content: 'Your use of our Services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.',
            },
            {
                section: '4. User Registration',
                content: 'Some features of our Services may require you to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
            },
            {
                section: '5. User Conduct',
                 content: ' You agree not to use our Services for any unlawful or prohibited purpose or in any manner that violates applicable laws, regulations, or these T&C. You agree not to engage in any activity that interferes with or disrupts our Services or the servers and networks connected to our Services. You agree not to attempt to gain unauthorized access to any portion of our Services or any other systems or networks connected to our Services.',
      },
      {
          section: '6. Content Ownership and Usage',
          content: 'Kidz Stop retains all rights, title, and interest in and to the content provided through our Services, including but not limited to text, graphics, logos, images, audio clips, and software. You may use our content solely for personal, non-commercial purposes. Any other use, including but not limited to reproduction, distribution, modification, or transmission, without our prior written consent, is strictly prohibited.',
        },
        {
            section: '7. Termination',
        content: 'Kidz Stop reserves the right to terminate your access to our Services at our discretion, with or without cause, and without prior notice.',
    },
      {
          section: '8. Disclaimer of Warranties',
          content: 'Our Services are provided "as is" and "as available," without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.',
        },
        {
            section: '9. Limitation of Liability',
            content: 'Kidz Stop shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our Services.',
        },
        {
            section: '10. Governing Law',
            content: 'These T&C are governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any legal action or proceeding relating to these T&C shall be brought exclusively in the federal or state courts located in New York.',
        },
        {
            section: '11. Contact Information',
            content: 'If you have any questions or concerns about these T&C, please contact us at: +91 234 567 2345',
        },
    ];
}

  render() {
    return (
      <div>
        <Header/>
        <div className='tc'>
            <div className='t1'>
        <h1>Terms and Conditions</h1>
        </div>
        {this.termsAndConditions.map((item, index) => (
          <div key={index}>
            <h3 className='sec'>{item.section}</h3>
            <p className='con'>{item.content}</p>
          </div>
        ))}
      </div>
      <Footer/>
      </div>
    );
  }
}

export default tc;