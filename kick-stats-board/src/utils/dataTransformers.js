export const transformProjectData = (data) => {
  return data.map((project) => ({
    sno: project["s.no"],
    title: project.title,
    percentageFunded: project["percentage.funded"],
    amountPledged: project["amt.pledged"],
  }));
};
