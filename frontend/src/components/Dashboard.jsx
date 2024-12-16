import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/projects')
      .then((response) => setProjects(response.data))
      .catch((err) => console.error(err));
  }, []);

  const acceptProject = (id) => {
    axios.put(`http://localhost:3000/api/projects/${id}/status`, { status: 'In Progress' })
      .then(() => alert('Project accepted!'))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Assigned Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.name} - {project.status}
            {project.status === 'Pending' && (
              <button onClick={() => acceptProject(project._id)}>Accept</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
