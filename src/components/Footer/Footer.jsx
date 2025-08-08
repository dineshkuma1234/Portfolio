import React from "react";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {

  const handleScroll=(sectionID)=>{
    const section = document.getElementById(sectionID);
    if(section){
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-white py-8 px-[12vw] md-px[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Dinesh Kumar</h2>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Certificate", id: "certificate" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button key={index} onClick={()=>handleScroll(item.id)} className="hover:text-purple-500 text-sm sm:text-base my-1">{item.name}</button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          <a href="https://www.linkedin.com/in/dinesh-kumar-1864b0289/" target="_blank" rel="nooper noreferrer" className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"><FaLinkedin/></a>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Dinesh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
