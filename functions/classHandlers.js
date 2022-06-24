const confirmCopyDiv = document.querySelector(".confirmCopy");

let clickedAnchor = "";
let timeout = "";

const removeShowAlertClass = () => {
  confirmCopyDiv.classList.remove("showConfirmBox");
  confirmCopyDiv.offsetHeight;
};

const showConfirmationAlert = (command) => {
  removeShowAlertClass();
  clearTimeout(timeout);
  confirmCopyDiv.classList.add("showConfirmBox");
  confirmCopyDiv.innerText = command + " a été copié";

  timeout = setTimeout(removeShowAlertClass, 3000);
};

const handleClickedAnchorClass = (target) => {
  if (clickedAnchor) {
    clickedAnchor.classList.remove("clicked__anchor");
  }

  clickedAnchor = target;
  clickedAnchor.classList.add("clicked__anchor");
};

export { showConfirmationAlert, handleClickedAnchorClass };