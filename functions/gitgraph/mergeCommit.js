import { globalOptions } from "./index.js";

const firstMergeCommit = () => {
  const firstMergeCommitDiv = document.getElementById("merge_commit_graph");
  const gitgraph = GitgraphJS.createGitgraph(firstMergeCommitDiv, globalOptions);

  const main = gitgraph.branch("main/feat");
  main.commit("init");
};

const secondMergeCommit = () => {
  const secondMergeCommitDiv = document.getElementById("merge_commit_graph");
  const gitgraph = GitgraphJS.createGitgraph(secondMergeCommitDiv, globalOptions);

  const main = gitgraph.branch("main");
  main.commit("init");
  const feature = gitgraph.branch("feat");
  feature.commit("add title");
};

const thirdMergeCommit = () => {
  const thirdMergeCommitDiv = document.getElementById("merge_commit_graph");
  const gitgraph = GitgraphJS.createGitgraph(thirdMergeCommitDiv, globalOptions);

  const main = gitgraph.branch("main");
  main.commit("init");

  const feature = gitgraph.branch("feat");
  feature.commit("add title");
  main.commit("add readme");

};

const fourthMergeCommit = () => {
  const fourthMergeCommitDiv = document.getElementById("merge_commit_graph");
  const gitgraph = GitgraphJS.createGitgraph(fourthMergeCommitDiv, globalOptions);

  const main = gitgraph.branch("main");
  main.commit("init");

  const feature = gitgraph.branch("feat");
  feature.commit("add title");
  main.commit("add readme");
  main.merge(feature, "merge feat");

};

const mergeCommit = () => {
  firstMergeCommit();
  secondMergeCommit();
  thirdMergeCommit();
  fourthMergeCommit();
};

export default mergeCommit;

