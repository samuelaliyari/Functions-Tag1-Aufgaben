function math() {
    const age1 = document.body.querySelector("#age1");
    const age2 = document.body.querySelector("#age2");
    const result = document.body.querySelector("h3");
    if (age1.value > age2.value) {
        result.textContent = age1.value - age2.value
    } else {
        result.textContent = age2.value - age1.value
    }
}