let input = document.getElementById("emailInput");
let button = document.querySelector("main > section > div > button ");
let div = document.querySelector("main > section > div");
button.addEventListener("click", () => {
  let inputValue = input.value;
  let regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  !regexp.test(inputValue)
    ? div.classList.add("error")
    : div.classList.remove("error");
});
