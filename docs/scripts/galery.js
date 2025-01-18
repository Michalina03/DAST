const galery = document.querySelector("#galery");
const galeryContainer = document.querySelector("#galeryContainer");
const galeryClose = document.querySelector("#galery--close");

const openGalery = () => {
    console.log("Galeria otwarta!");
    galeryContainer.style.display = "block";
};
  
const closeGalery = () => {
    console.log("Galeria zamknięta!");
    galeryContainer.style.display = "none";
};
  
galery.addEventListener("click", () => {
    openGalery();
});
  
galeryClose.addEventListener("click", () => {
    closeGalery();
});

openGalery();
