const { createGitgraph, templateExtend } = require("@gitgraph/js");

const graphContainer = document.getElementById("gitgraph");

const options = {
  orientation: "vertical",
  template: templateExtend("metro", {
    colors: ["orange", "blue", "orange"],
    branch: {
      spacing: "50",
    },
    commit: {
      message: {
        displayAuthor: false,
      }
    },
    // …
  }),
};

const gitgraph = createGitgraph(graphContainer, options);

const main = gitgraph.branch({
  name: "main"

});

main.commit({
  subject: "init",
  hash: "dd755a6"
})
  .commit("Add README");
const feature = gitgraph.branch("feature");
feature.commit("");
main.commit("");
feature.commit("");
// Merge `newFeature` into `main`
// main.merge(newFeature, "Release new version")