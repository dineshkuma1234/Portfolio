import React from "react";
import {certificate} from "../../constants";
import { useState } from "react";
const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenModal=(cert)=>{
    setSelectedCertificate(cert);
  }

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  }
  return (
    <section
      id="certificate"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative "
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white ">CERTIFICATE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">A certification that validates my skills and knowledge in Full Stack Development, covering both front-end and back-end technologies.</p>
      </div>

      {/* Certificate Cards */}
      <div className="grid gap-12 grid-cols-1 px-[2vw] md:px-[12vw] lg:px-[15vw] ">
        {certificate.map((cert)=>(
          <div key={cert.id} onClick={()=>handleOpenModal(cert)}  className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 items-center justify-center">
            <div className="p-4">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-500 mb-4 pt-5 line-clamp-3 ">{cert.description}</p>
              <div>
                {cert.tags.map((tag,index)=>(
                  <span key={index} className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2">{tag}</span>

                ))}
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* modal container */}

      {selectedCertificate &&(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#8245ec] scrollbar-track-[#251f38]">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative ">
            <div className="flex justify-end p-4 lg:mt-20">
              <button onClick={handleCloseModal} className="text-white text-3xl font-bold hover:text-purple-500 ">&times;</button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img src={selectedCertificate.image} alt={selectedCertificate.title} className="lg:w-full w-[955] object-contain shadow-2xl rounded-xl"/>
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">{selectedCertificate.title}</h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">{selectedCertificate.description}</p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedCertificate.tags.map((tag, index) => (
                    <span key={index} className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
