//selectors
let selectOne = document.getElementById("currency-one");
let selectTwo = document.getElementById("currency-two")

let amountEl_one = document.getElementById("amount-one");
let amountEl_two = document.getElementById("amount-two");


let swapBtn = document.getElementById("swap");
let outputRate = document.getElementById("rate");


function calculate() {

    // select One,
    fetch(`https://api.exchangerate-api.com/v4/latest/${selectOne.value}`)
        .then((dt => dt.json()))
        .then(data => {
            outputRate.innerText = "1 " + selectOne.value + " = " + data.rates[selectTwo.value] + " " + selectTwo.value;
            amountEl_two.value = parseFloat(amountEl_one.value * data.rates[selectTwo.value]).toFixed(2);


        })

    // select two
    // fetch(`https://api.exchangerate-api.com/v4/latest/${selectTwo.value}`)
    // .then((dt => dt.json()))
    // .then(data=> {
    //     currencyRateTwo =   Number(data.rates[selectTwo.value])
    // })



}


selectOne.addEventListener("change", calculate);
selectTwo.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
amountEl_two.addEventListener("input", calculate);

swapBtn.addEventListener('click', function () {
    let thirdBox = selectOne.value;

    selectOne.value = selectTwo.value;
    selectTwo.value = thirdBox;
    calculate();

})