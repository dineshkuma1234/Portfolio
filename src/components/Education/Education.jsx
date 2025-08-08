import React from "react";
import { education } from "../../constants";
const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3 "
    >
      <div className="text-center mb-16">
        <h2 className="font-bold text-white text-4xl">Education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          {" "}
          A concise overview of my academic background, highlighting key
          qualifications and certifications that have shaped my technical
          foundation.
        </p>
        {/* Education Timeline */}
        <div className="relative">
          {/* verticalLine */}
          <div className="absolute sm:left-1/2  left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>
          {/* Education Cards */}
          {education.map((educat, index) => (
            <div
              key={educat.id}
              className={`flex  flex-col sm:flex-row items-center mt-10 mb-16 ${
                index % 2 === 0 ? " sm:justify-start" : "sm:justify-end"
              } `}
            >
              <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec]  w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center  z-10">
                <img
                  src={educat.img}
                  alt={educat.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* content section */}
              <div
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:ml-[48px] sm:mr-[48px] ml-8 transform transition-transform duration-300 hover:scale-105 `}
              >
                {/* flex container for img and text */}
                <div className="flex items-center space-x-6">
                  {/* company logo */}
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={educat.img}
                      alt={educat.company}
                      className="w-full h-full object-cover "
                    />
                  </div>

                  {/* Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-xl font-semibold text-white">
                        {educat.degree}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {educat.school}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="text-sm text-gray-500 mt-2">{educat.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 text-justify max-w-prose leading-relaxed">{educat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
