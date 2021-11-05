{
    const welcome = () => {
        console.log("Cześć! Miło mi Cię tu powitać!");
    };

    const toggleHeader = () => {
        const header = document.querySelector(".mainHeader");
        header.classList.toggle("headerChange");
    };

    const offPhoto = () => {
        const photo = document.querySelector(".js-photo");
        photo.remove();
    };

    const quizFirst = () => {
        const quizFolseFirst = document.querySelector(".js-foil");
        const quizButtonFirst = document.querySelector(".js-buttonFoil");
        quizButtonFirst.classList.toggle("buttonFalse");

        quizFolseFirst.innerText = quizButtonFirst.classList.contains("buttonFalse") ? "PUDŁO !" : "Floret";
    };

    const quizSecond = () => {
        const quizTrue = document.querySelector(".js-epee");
        const quizButtonSecond = document.querySelector(".js-buttonEpee");
        quizButtonSecond.classList.toggle("buttonTrue");

        quizTrue.innerText = quizButtonSecond.classList.contains("buttonTrue") ? "BINGO ! 😃👍" : "Szpada";
    };

    const quizThird = () => {
        const quizFolseSecond = document.querySelector(".js-sabre");
        const quizButtonThird = document.querySelector(".js-buttonSabre");
        quizButtonThird.classList.toggle("buttonFalse");

        quizFolseSecond.innerText = quizButtonThird.classList.contains("buttonFalse") ? "PUDŁO !" : "Szabla";
    };

    const init = () => {
        const buttonChangeHeader = document.querySelector(".js-buttonChange");
        const buttonPhoto = document.querySelector(".js-buttonPhoto");
        const quizButtonFirst = document.querySelector(".js-buttonFoil");
        const quizButtonSecond = document.querySelector(".js-buttonEpee");
        const quizButtonThird = document.querySelector(".js-buttonSabre");

        quizButtonFirst.addEventListener("click", quizFirst);
        quizButtonSecond.addEventListener("click", quizSecond);
        quizButtonThird.addEventListener("click", quizThird);
        buttonChangeHeader.addEventListener("click", toggleHeader);
        buttonPhoto.addEventListener("click", offPhoto);

        welcome();
    };

    init();
}