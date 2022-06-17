const confirmCopyDiv = document.querySelector(".confirmCopy");
const copyBtn = `
<button class="copyBtn">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--bx" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" fill="currentColor"></path><path d="M4 22h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2zm2-10h6v2H6v-2zm0 4h6v2H6v-2z" fill="currentColor"></path></svg>
</button>
`;

let timeout = "";

const removeShowAlertClass = () => {
  confirmCopyDiv.classList.remove("showConfirmBox");
  confirmCopyDiv.offsetHeight;
};

const showConfirmationAlert = (command) => {
  removeShowAlertClass();
  clearTimeout(timeout);
  confirmCopyDiv.classList.add("showConfirmBox");
  confirmCopyDiv.innerText = command + " a été ajouté au presse papier";

  timeout = setTimeout(removeShowAlertClass, 3000);
};

const copyCommand = (cell) => {
  const command = cell.innerText;
  navigator.clipboard.writeText(command);
  showConfirmationAlert(command);
};

const addCopyBtns = () => {
  const commandsCells = document.querySelectorAll("tr td:nth-child(1)");

  commandsCells.forEach((cell, i) => {
    cell.insertAdjacentHTML("beforeend", copyBtn);
    const button = document.querySelectorAll(".copyBtn");

    button[i].addEventListener("click", () => copyCommand(cell));
  });
};

addCopyBtns();

