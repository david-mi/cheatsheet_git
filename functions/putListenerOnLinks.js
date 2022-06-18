import { handleClickedAnchorClass } from "./index.js";

const putListenerOnLinks = () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", ({ target }) => {
      handleClickedAnchorClass(target);
    });
  });
};

export default putListenerOnLinks;