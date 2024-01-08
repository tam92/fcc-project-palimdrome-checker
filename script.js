const checkBtn = document.getElementById("check-btn");
checkBtn.addEventListener("click", check);
const result = document.getElementById("result");

function check() {
    const input = document.getElementById("text-input").value;
    const regex = /[a-zñáéíóú0-9]/i;
    const arrayInput = input.split("");
    let finalArray = [];

    if (input === "") {
        isEmpty();
        return;
    }

    arrayInput.filter((character) => {
        if (character == character.match(regex)) {
            finalArray.push(character);
        }
    });

    if (finalArray.length === 0) {
        isEmpty();
        return;
    }

    const half = Math.floor(finalArray.length / 2);
    let i = 0;
    do {
        if ((finalArray[i]).toLowerCase() !== (finalArray[finalArray.length - 1 - i]).toLowerCase()) {
            result.textContent = `${input} is not a palindrome`;
            return;
        }
        i++;
    } while (i < half);

    result.textContent = `${input} is a palindrome`;
}

function isEmpty() {
    alert("Please input a value");
    result.textContent = "";
}