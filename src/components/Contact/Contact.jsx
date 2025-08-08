import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form=useRef();
  const [isSend, setIsSend] = useState(false);

  const sendToEmail = (e) => {
  e.preventDefault();
    emailjs.sendForm('service_nlztfb1', 'template_xwe8bkq', form.current, 'ZRNSkV00j10rz59RF')
      .then(() => {setIsSend(true);
        form.current.reset();
        toast.success('Message sent successfully! ✅', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        },(error)=>{toast.error('Failed to send message. Please try again later.',error);
          toast.error('Failed to send message. Please try again later.',{
             position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          })
        });

      })}
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />
      {/* section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="font-semibold text-gray-400 mt-4 text-lg">
          I’m always open to discussing new opportunities, collaborations, or
          simply connecting with like-minded professionals. Feel free to reach
          out for any inquiries, project discussions, or just to say hello —
          I’ll be happy to respond as soon as possible.
        </p>
      </div>

      {/* contact form */}
      <div className="w-full max-w-md mt-8 bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect & Collaborate
        </h3>

        <form ref={form} onSubmit={sendToEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="abcd@gmail.com"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          ></textarea>

          <button type="submit" className="w-full  py-3 bg-gradient-to-t from-purple-600 to-pink-500 text-white font-semibold rounded-md hover:opacity-90 transition">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
