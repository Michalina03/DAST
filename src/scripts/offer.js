const offer = document.querySelector("#offer");
const offerContainer = document.querySelector("#offerContainer");
const offerClose = document.querySelector("#offer--close");

const openOffer = () => {
    console.log("Offer otwarte!");
    offerContainer.style.display = "block";
};
  
const closeOffer = () => {
    console.log("Offer zamknięte!");
    offerContainer.style.display = "none";
};
  
offer.addEventListener("click", () => {
    openOffer();
});
  
offerClose.addEventListener("click", () => {
    closeOffer();
});

openOffer();
