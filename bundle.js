const { createGitgraph, templateExtend } = require("@gitgraph/js");

const graphContainer = document.getElementById("gitgraph");

const options = {
  orientation: "vertical",
  template: templateExtend("metro", {
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

const gitgraph = createGitgraph(graphContainer, options);

const main = gitgraph.branch({
  name: "main"
});

main.commit("Init")
  .commit({ subject: "Add README", hash: "" });
const header = gitgraph.branch("feat/header");
const footer = gitgraph.branch("feat/footer");

footer
  .commit("Add contact")
  .commit("Add External links");

main.merge(footer, "merge footer");

header
  .commit("Add Navbar")
  .commit("Add Logo");
