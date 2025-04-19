import React, { forwardRef } from 'react';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoMailOpen } from "react-icons/io5";
import emailjs from 'emailjs-com';

const Footer = forwardRef((props, ref) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_89y4qpx', 'template_4o4a2ks', e.target, 'ef1HmjKejH2nv8q75')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again.');
      });

    e.target.reset();
  };

  return (
    <footer ref={ref} className="footer">
      <div id='contact' className="bg-[#292929] w-full min-h-9/10 flex justify-around">
        <div className="shadow-md rounded-lg" style={{ backgroundColor: '#292929' }}>
          <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
          <form onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-[#87802B] rounded-md shadow-sm focus:outline-none focus:border-indigo-500 bg-[#292929] text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-[#87802B] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#292929] text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full px-3 py-2 border border-[#87802B] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#292929] text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#87802B] text-white py-2 px-4 rounded-md hover:bg-[#87802B] focus:outline-none focus:ring-2 focus:ring-[#87802B] focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
          <div className="mt-6 text-right">
            {/* Social Media Links */}
          </div>
        </div>

        <div>
          <div style={{ color: '#F2F2F2', textAlign: 'right', fontFamily: 'Lato', fontSize: '24px', fontStyle: 'normal', fontWeight: '700', lineHeight: '35px' }}>
            <h4>Email</h4>
          </div>
          <div className="flex justify-end items-end" style={{ color: '#F2F2F2' }}>
            <a href="mailto:humira87@gmail.com" target="_blank" rel="noopener noreferrer">
              <IoMailOpen size={32} />
            </a>
          </div>

          <div className="mt-5" style={{ color: '#F2F2F2', textAlign: 'right', fontFamily: 'Lato', fontSize: '24px', fontStyle: 'normal', fontWeight: '700', lineHeight: '35px' }}>
            <h4>Social Media</h4>
          </div>

          <div className="flex justify-center space-x-4 mt-2" style={{ color: '#F2F2F2' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={32} />
            </a>
            <a href="https://www.linkedin.com/in/humiralam/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={32} />
            </a>
            <a href="https://github.com/HumiraAlam/humira-alam" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;