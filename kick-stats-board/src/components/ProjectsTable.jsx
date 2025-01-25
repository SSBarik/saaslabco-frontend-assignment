import { useEffect, useState } from "react";
import axios from "axios";
import { projectColumns } from "../configs/columnsConfig";
import dummyData from "../../../frontend-assignment.json";
import PaginatedTable from "./common/PaginatedTable";

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
      const data = getTransformedProjectData(dummyData);
      console.log("Projects: ", data);

      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTransformedProjectData = (data) => {
    return data.map((project) => ({
      sno: project["s.no"],
      title: project.title,
      percentageFunded: project["percentage.funded"],
      amountPledged: project["amt.pledged"],
    }));
  };

  return (
    <div>
      <h1>Kickstarter Projects Table</h1>
      <p>{isLoading && "Loading projects..."}</p>
      <PaginatedTable columns={projectColumns} data={projects} />
    </div>
  );
};

export default ProjectsTable;
