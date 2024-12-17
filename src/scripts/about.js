const about = document.querySelector("#about");
const aboutContainer = document.querySelector("#aboutContainer");
const aboutClose = document.querySelector("#about--close");

const openAbout = () => {
    console.log("About otwarte!");
    aboutContainer.style.display = "block";
  };
  
  const closeAbout = () => {
    console.log("About zamknięte!");
    aboutContainer.style.display = "none";
  };
  
  about.addEventListener("click", () => {
    openAbout();
  });
  
  aboutClose.addEventListener("click", () => {
    closeAbout();
  });
openAbout()