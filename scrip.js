let form = document.querySelector("form");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value == "") {
        alert("Por favor escriba algo");
    } else {
        alert("Gracias por escribir");
    }
})