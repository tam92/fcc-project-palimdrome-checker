// variables HTML
const btn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const regex = /[a-z\d]/g; // elimina todos los caracteres no alfanuméricos


const comprobarPalindromo = () => {
    const input = document.getElementById("text-input");
    let palindromoFlag = true;
    if (input.value === "") {
        alert("Please input a value");
        result.textContent = "";
    } else if (input.value.length == 1) {
        resultDiv.textContent = input.value + " is a palindrome"
    } else {
        const inputFiltrada = input.value.toLowerCase().match(regex);

        const mitad = (inputFiltrada.length / 2).toFixed(0) - 1;
            for (let i = 0; i <= mitad; i++) {
                if (inputFiltrada[i] !== inputFiltrada[inputFiltrada.length - 1 - i]) {
                    palindromoFlag = false;
                    resultDiv.textContent = input.value + " is not a palindrome"
                }
            }
        
        if (palindromoFlag) {
            resultDiv.textContent = input.value + " is a palindrome"
        }
    }
    
}

btn.addEventListener("click", comprobarPalindromo);



