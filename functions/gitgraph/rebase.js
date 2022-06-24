import { globalOptions } from "./index.js";

const firstRebase = () => {
  const firstRebaseDiv = document.getElementById("rebase_graph");
  const gitgraph = GitgraphJS.createGitgraph(firstRebaseDiv, globalOptions);

  const main = gitgraph.branch("main");
  main.commit("init");
  const feature = main.branch("feature/nav");
  feature.commit("add title");
  feature.commit("add navbar");
};

const secondRebase = () => {
  const secondRebaseDiv = document.getElementById("rebase_graph");
  const gitgraph = GitgraphJS.createGitgraph(secondRebaseDiv, globalOptions);

  const main = gitgraph.branch("main");
  main.commit("init");
  const feature = main.branch("feature/nav");
  feature.commit("add title");
  feature.commit("add navbar");
  main.commit("add readme");
  main.commit("update env");

};

const thirdRebase = () => {
  const thirdRebaseDiv = document.getElementById("rebase_graph");
  const gitgraph = GitgraphJS.createGitgraph(thirdRebaseDiv, globalOptions);

  const main = gitgraph.branch("main");
  main.commit("init");
  main.commit("add readme");
  main.commit("update env");
  const feature = main.branch("feature/nav");
  feature.commit("add title");
  feature.commit("add navbar");

};

const rebase = () => {
  firstRebase();
  secondRebase();
  thirdRebase();
};

export default rebase;

