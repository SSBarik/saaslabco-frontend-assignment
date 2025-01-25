import React, { useEffect, useState } from "react";
import axios from "axios";
import dummyData from "../../../frontend-assignment.json";

const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);

      // const response = await axios.get(
      //   "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      // );

      // const data = response.data;

      // Temp dummy data
      const data = dummyData;
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
