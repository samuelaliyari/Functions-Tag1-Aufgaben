function ageCalc() {
    const year = document.body.querySelector("#year");
    const ageContainer = document.body.querySelector("h3");
    ageContainer.textContent = 2023 - year.value; 
}

