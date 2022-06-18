import globalOptions from "./globalOptions.js";

const firstFastForward = () => {
  const firstFastForwardDiv = document.getElementById("fast_forward_graph");
  const gitgraph = GitgraphJS.createGitgraph(firstFastForwardDiv, globalOptions);

  const main = gitgraph.branch("main/header");
  main.commit("init");
};

const secondFastForward = () => {
  const secondFastForwardDiv = document.getElementById("fast_forward_graph");
  const gitgraph = GitgraphJS.createGitgraph(secondFastForwardDiv, globalOptions);

  const main = gitgraph.branch("main");
  main.commit("init");
  const feature = gitgraph.branch("header");
  feature.commit("add title");
  feature.commit("add navbar");

};

const thirdFastForward = () => {
  const thirdFastForwardDiv = document.getElementById("fast_forward_graph");
  const gitgraph = GitgraphJS.createGitgraph(thirdFastForwardDiv, globalOptions);

  const main = gitgraph.branch("main/header");
  main.commit("init");
  main.commit("add title");
  main.commit("add navbar");

};

const fastForwardMerge = () => {
  firstFastForward();
  secondFastForward();
  thirdFastForward();
};

export default fastForwardMerge();

