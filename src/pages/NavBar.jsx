import React from 'react';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 bg-transparent z-10">
      <div className="flex items-center">
        <img src="/public/logo.svg" alt="Logo" className="h-15 mr-3" />
        {/* <div className="text-white text-2xl font-bold" style={{ fontFamily: "'Anta', sans-serif" }}>My Portfolio</div> */}
      </div>
      <div className="flex space-x-4">
        <a href="#home" className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>Home</a>
        <a href="#about" className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>About</a>
        <button onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>Projects</button>
        <a href="#tools" className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>Tools</a>
        <button onClick={() => scrollToSection('why-me')} className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>Why Me</button>
        <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>Contact</button>

      </div>
    </nav>
  );
};

export default NavBar;