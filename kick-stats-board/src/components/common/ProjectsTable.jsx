import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      );

      const data = response.data;
      console.log("Projects: ", data);

      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Kickstarter Projects Table</h1>
      <p>{isLoading && "Loading projects..."}</p>
    </div>
  );
};

export default ProjectsTable;
