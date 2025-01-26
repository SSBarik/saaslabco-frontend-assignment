import { FETCH_PROJECTS_URL, RECORDS_PER_PAGE } from "@configs/constant";
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
      <PaginatedTable
        columns={projectColumns}
        data={projects}
        rowsPerPage={RECORDS_PER_PAGE}
        isLoading={isLoading}
        customStyles={projectCustomStyles}
      />

      {/* Temporary alert for error. Will replace with better UX like toast */}
      {error && alert(error)}
    </article>
  );
};

export default ProjectsTableContainer;
