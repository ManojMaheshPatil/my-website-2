import React from "react";
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/manoj-patil-1942641aa"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-500"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Linkedin className="w-5 h-5 mr-2 relative z-10" />
            <span className="relative z-10">LinkedIn</span>
          </a>
          <a
            href="mailto:mprdjcr7@gmail.com"
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-red-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-red-500"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Mail className="w-5 h-5 mr-2 relative z-10" />
            <span className="relative z-10">Gmail</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
