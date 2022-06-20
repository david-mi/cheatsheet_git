import { fastForwardMerge, mergeCommit, rebase } from './functions/gitgraph/index.js';
import { addCopyToClipBoardButtons, putListenerOnLinks } from "./functions/index.js";


addCopyToClipBoardButtons();
putListenerOnLinks();

// MAKING GIT GRAPHS
fastForwardMerge();
mergeCommit();
rebase();

