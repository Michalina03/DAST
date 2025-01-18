const conctact = document.querySelector("#conctact");  // Nazwa 'conctact'
const conctactContainer = document.querySelector("#conctactContainer"); // Nazwa 'conctactContainer'
const conctactClose = document.querySelector("#conctact--close"); // Nazwa 'conctact--close'

const openConctact = () => { // Funkcja 'openConctact'
    console.log("Kontakt otwarty!");
    conctactContainer.style.display = "block";
};

const closeConctact = () => { // Funkcja 'closeConctact'
    console.log("Kontakt zamknięty!");
    conctactContainer.style.display = "none";
};

conctact.addEventListener("click", () => {
    openConctact();
});

conctactClose.addEventListener("click", () => {
    closeConctact();
});

