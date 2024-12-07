import React from "react";
import myPic from "../components/mypic.jpeg"; // Adjust path if necessary

const About = () => {
  return (
    <section id="about" className="py-12 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src={myPic}
              alt="Manoj Patil"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              Hey there👋 I'm Manoj. I'm currently working as a Software
              Engineer at Genpact. I've also worked as an Intern at IBM.Having
              3+ years of industry experience, I am deeply passionate about
              designing and developing websites and applications that address
              real-world challenges and deliver tangible benefits. I love
              building websites/apps that have real world use cases. I am open
              to opportunities for collaboration, discussion, and innovation.
              Please feel free to contact me using the details listed below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
