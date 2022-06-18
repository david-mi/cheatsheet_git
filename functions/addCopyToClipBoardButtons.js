import { copyBtn, showConfirmationAlert } from "./index.js";

const copyToClipboard = (cell) => {
  const command = cell.innerText;
  navigator.clipboard.writeText(command);
  showConfirmationAlert(command);
};

const addCopyToClipBoardButtons = () => {
  const commandsCells = document.querySelectorAll("tr td:nth-child(1)");

  commandsCells.forEach((cell, i) => {
    cell.insertAdjacentHTML("beforeend", copyBtn);
    const button = document.querySelectorAll(".copyBtn");

    button[i].addEventListener("click", () => copyToClipboard(cell));
  });
};

export default addCopyToClipBoardButtons;