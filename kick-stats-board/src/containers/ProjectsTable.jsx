import { useEffect, useState } from "react";
import axios from "axios";
import { projectColumns } from "@configs/columnsConfig";
import { projectCustomStyles } from "@configs/stylesConfig";
import dummyData from "../../../frontend-assignment.json";
import PaginatedTable from "@components/common/paginated-table/PaginatedTable";

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

      // Temp dummy delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

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
      <PaginatedTable
        columns={projectColumns}
        data={projects}
        isLoading={isLoading}
        customStyles={projectCustomStyles}
      />
    </div>
  );
};

export default ProjectsTable;
