import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import Tool from './Tool';
import projects from '../data/projects.json'; // Import the JSON data
import SmallCards from './SmallCards';
import Modal from '../components/Modal'; // Import the Modal component

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div  id="projects" className="bg-[#292929] w-full min-h-screen" >
      <div className="">
      <h2 className="text-3xl font-normal mx-5 mb-4 pt-5" style={{ color: "#F2F2F2" }}>My Projects</h2>
        <div className="project-list flex justify-around pt-[80px]">
          {projects.slice(0, 4).map((project, index) => (
            <div className="project-item" key={index}>
              <Button variant="newVariant" onClick={() => handleOpenModal(project)}>{project.name}</Button>
            </div>
          ))}
        </div>
        <div className="project-list flex justify-around pt-12">
          {projects.slice(4).map((project, index) => (
            <div className="project-item" key={index + 3}>
              <Button variant="newVariant" onClick={() => handleOpenModal(project)}>{project.name}</Button>
            </div>
          ))}
        </div>
        <Tool />
        <SmallCards />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />
    </div>
  );
}

export default Projects;