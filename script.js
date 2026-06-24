function checkNumber() {
    let number = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    result.className = "";

    if (number === "") {
        result.innerHTML = "Please enter a number.";
        result.classList.add("text-error");
    } else {
        if (number % 2 === 0) {
            result.innerHTML = number + " is an Even Number.";
            result.classList.add("text-even");
        } else {
            result.innerHTML = number + " is an Odd Number.";
            result.classList.add("text-odd");
        }
    }
}

document.getElementById("numberInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkNumber();
    }
});
