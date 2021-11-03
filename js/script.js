console.log("Cześć! ");

{
    let buttonChangeHeader = document.querySelector(".js-buttonChange");
    let header = document.querySelector(".mainHeader");
    
    buttonChangeHeader.addEventListener("click", () => {
        header.classList.toggle("headerChange");
    })
    
    let buttonPhoto = document.querySelector(".js-buttonPhoto");
    let photo = document.querySelector(".js-photo");
    
    buttonPhoto.addEventListener("click", () => {
        photo.remove();
    })
}

let buttonEpee = document.querySelector(".js-buttonEpee");
let buttonFoil = document.querySelector(".js-buttonFoil");
let buttonSabre = document.querySelector(".js-buttonSabre");
let sabre = document.querySelector(".js-sabre");
let foil = document.querySelector(".js-foil");
let epee = document.querySelector(".js-epee");

buttonEpee.addEventListener("click", () => {
    buttonEpee.classList.toggle("buttonTrue");

    epee.innerText = buttonEpee.classList.contains("buttonTrue") ? "BINGO ! 😃👍" : "Szpada";
});

buttonFoil.addEventListener("click", () => {
    buttonFoil.classList.toggle("buttonFalse");

    foil.innerText = buttonFoil.classList.contains("buttonFalse") ? "PUDŁO !" : "Floret";
});

buttonSabre.addEventListener("click", () => {
    buttonSabre.classList.toggle("buttonFalse");

    sabre.innerText = buttonSabre.classList.contains("buttonFalse") ? "PUDŁO !" : "Szabla";
});

