import { FETCH_PROJECTS_URL } from "@configs/constant";
import { projectColumns } from "@configs/columnsConfig";
import { projectCustomStyles } from "@configs/stylesConfig";
import { transformProjectData } from "@utils/dataTransformers";
import useFetchData from "@hooks/useFetchData";
import PaginatedTable from "@components/common/paginated-table/PaginatedTable";

const ProjectsTableContainer = () => {
  const {
    data: projects,
    isLoading,
    error,
  } = useFetchData(FETCH_PROJECTS_URL, transformProjectData);

  return (
    <article>
      {error && alert(error)}
      <PaginatedTable
        columns={projectColumns}
        data={projects}
        isLoading={isLoading}
        customStyles={projectCustomStyles}
      />
    </article>
  );
};

export default ProjectsTableContainer;
