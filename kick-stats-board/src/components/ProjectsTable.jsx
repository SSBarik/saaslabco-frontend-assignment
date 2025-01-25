import { useEffect, useState } from "react";
import axios from "axios";
import { formatValue } from "../utils/formatters";
import dummyData from "../../../frontend-assignment.json";
import Table from "./common/Table";

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

  const columns = [
    {
      id: "sno",
      label: "S.No.",
    },
    {
      id: "title",
      label: "Title",
    },
    {
      id: "percentageFunded",
      label: "Percentage Funded",
      format: (value) => formatValue(value, "percentage"),
    },
    {
      id: "amountPledged",
      label: "Amount Pledged",
      format: (value) => formatValue(value, "currency"),
    },
  ];

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
      <Table columns={columns} data={projects} />
    </div>
  );
};

export default ProjectsTable;
