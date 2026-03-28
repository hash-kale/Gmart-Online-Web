// Updated Projects.tsx
import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>Our Projects</h1>
      <div className="project">
        <img src="/assets/images/projects/project1.jpg" alt="Project 1" />
        <p>Project 1 Description</p>
      </div>
      <div className="project">
        <img src="/assets/images/projects/project2.jpg" alt="Project 2" />
        <p>Project 2 Description</p>
      </div>
      <div className="project">
        <img src="/assets/images/projects/project3.jpg" alt="Project 3" />
        <p>Project 3 Description</p>
      </div>
    </div>
  );
};

export default Projects;