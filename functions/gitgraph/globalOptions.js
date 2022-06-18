const globalOptions = {
  orientation: "vertical",
  template: GitgraphJS.templateExtend("metro", {
    colors: ["#023047", "#fb8500", "#219ebc"],
    branch: {
      spacing: "40"
    },
    commit: {
      spacing: "50",
      message: {
        displayAuthor: false,
        displayHash: false
      }
    },
  }),
};

export default globalOptions;