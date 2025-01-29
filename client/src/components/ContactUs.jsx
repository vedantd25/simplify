import { useState } from 'react';

const ContactUs = () => {

    
        

    return (
      <div id="contact-us" className="py-12 bg-gradient-to-r from-gray-200 via-white to-gray-200 text-gray-800 italic">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          

            <div className="flex-1 p-6 bg-violet-950 text-white rounded-lg shadow-2xl">
              <h3 className="text-xl font-bold mb-4 italic">Get In Touch</h3>
              <p className="mb-4 italic"> Lets talk business or just have a coffee. We would love to hear from you!</p>
              <div className="mb-4 flex items-start">
                <img src="/assets/visit us.png" alt="Visit Us Icon" className="w-6 h-6 mr-2" />
                <div>
                  <p className="font-bold">Visit Us:</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="mb-4 flex items-start">
                <img src="/assets/mail-us.png" alt="Mail Us Icon" className="w-6 h-6 mr-2" />
                <div>
                  <p className="font-bold">Mail Us:</p>
                  <p>vedantdalal100@gmail.com</p>
                </div>
              </div>
              <div className="mb-4 flex items-start">
                <img src="/assets/contact-us.png" alt="Call Us Icon" className="w-6 h-6 mr-2" />
                <div>
                  <p className="font-bold">Call Us:</p>
                  <p>+91 9284901140</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default ContactUs;
  
