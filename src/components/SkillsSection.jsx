import React from "react";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "tailwind",

  "MongoDB",
  "Express.js",
  "React Native",
  "Git",
];

const SkillsSection = () => {
  return (
    <section id="Skills" className="bg-custom ">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 420"
          className="w-full"
          transform="scale(1, -1)"
        >
          <path
            fill="#4F46E5"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,176C672,149,768,107,864,112C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 420"
          className="w-full absolute top-0 left-0"
          transform="scale(1, -1)"
        >
          <path
            fill="#4F46E5"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,176C672,149,768,107,864,112C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
        <p className="text-lg text-gray-500 mb-12">
          Here are some of the tools and technologies I specialize in:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} title={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ title }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    </div>
  );
};

export default SkillsSection;
