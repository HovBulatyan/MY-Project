const initState = {
  projects: [
    { id: "1", title: "Security Projects", content: "projects in 2020" },
    { id: "2", title: " Bio-Medical Projects", content: "projects in 2020" },
    {
      id: "3",
      title: " Power Electronics Projects",
      content: "projects in 2020",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
      default:
          return state;
  }
};

export default projectReducer;
