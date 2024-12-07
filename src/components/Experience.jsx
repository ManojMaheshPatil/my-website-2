import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Professional Experience
        </h2>
        <div className="space-y-12">
          <div className="border-l-2 border-blue-400 pl-6">
            <h3 className="text-xl font-semibold">
              Software Engineer - Genpact
            </h3>
            <p className="text-blue-400 mb-2">July 2022 - Present</p>
            <p className="text-gray-300">
              Contributed to a team that built the Enterprise Planning and
              Budgeting System for a leading global media and entertainment
              company.
            </p>
          </div>
          <div className="border-l-2 border-blue-400 pl-6">
            <h3 className="text-xl font-semibold">Inten - IBM</h3>
            <p className="text-blue-400 mb-2">Jan 2022 - June 2022</p>
            <p className="text-gray-300">
              Part of the team which was responsible for the clinical data
              integration of a leading US based healthcare organisation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
