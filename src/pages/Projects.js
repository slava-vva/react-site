import React from 'react';

const projects = [
  { title: 'Portfolio Website', description: 'A personal portfolio built with React.' },
  { title: 'Weather App', description: 'App that fetches weather data using an API.' }
];

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;