export const transformProjectData = (data) => {
  return data.map((project, index) => ({
    sno: index + 1,
    title: project.title,
    percentageFunded: project["percentage.funded"],
    amountPledged: project["amt.pledged"],
  }));
};
