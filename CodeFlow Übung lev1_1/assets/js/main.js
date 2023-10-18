function mult2() {
    const zahl = document.body.querySelector("input[type=number]");
    const result = document.body.querySelector("p");
    result.textContent = "Eingegebene Zahl mal 2: " + zahl.value * 2
}

mult2()