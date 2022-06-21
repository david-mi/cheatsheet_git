const navbar = document.querySelector("nav");
const main = document.querySelector("main");

const addBlurMain = () => {
  main.classList.remove("removeBlur");
  main.classList.add("addBlur");
};

const removeBlurMain = () => {
  main.classList.remove("addBlur");
  main.classList.add("removeBlur");
};

const showNavBar = () => {
  navbar.classList.remove("nav__slideout");
  navbar.classList.add("nav__slidein");
  addBlurMain();
};

const removeNavBar = () => {
  navbar.classList.remove("nav__slidein");
  navbar.classList.add("nav__slideout");
  removeBlurMain();
};

const swipeHandle = () => {
  let touchInitPosition = "";

  document.addEventListener("touchstart", ({ touches }) => {
    const { pageX } = touches[0];
    touchInitPosition = pageX;
  });

  document.addEventListener("touchmove", ({ changedTouches }) => {
    const { pageX } = changedTouches[0];
    const calcDiff = pageX - touchInitPosition;

    if (calcDiff > 75) {
      showNavBar();
    }

    if (calcDiff < -75) {
      removeNavBar();
    }
  });

  navbar.addEventListener("click", removeNavBar);
};

export default swipeHandle;