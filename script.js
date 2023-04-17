const cvcSpan = document.querySelector(".cvc-span")
const cardNumberSpan = document.querySelector(".card-number")
const cardNameSpan = document.querySelector(".card-name")
const cardMMSpan = document.querySelector(".card-mm")
const cardYYSpan = document.querySelector(".card-yy")
const cvcInput = document.querySelector(".cvc-input")
const cardNumberInput = document.querySelector(".card-number-input")
const cardNameInput = document.querySelector(".name-input")
const cardMMInput = document.querySelector(".mm-input")
const cardYYInput = document.querySelector(".yy-input")

const confirmBtn = document.querySelector(".confirm")
const infoDiv = document.querySelector(".information-div")
const thankDiv = document.querySelector(".thank-div")
const noneP2 = document.querySelector(".red-p2")
const noneP1 = document.querySelector(".red-p1")
const redP = document.querySelector(".red-p")
const noneP3 = document.querySelector(".red-p3")
const noneP4 = document.querySelector(".red-p4")
let input = document.querySelectorAll("input");
var allInputsHaveValue = false;
let a = false
let b = false
let c = false
let d = false
let e = false
confirmBtn.addEventListener("click", function confirm(){
    cvcFunction()
    cardMMFunction()
    cardYYFunction()
    cardNumberFunction()
    cardNameInputFunction()
    validate()
})
function validateInputs() {
    if(a && b && c && d && e){
        allInputsHaveValue = true
    }
    return allInputsHaveValue;
  }

  function validate(){
    validateInputs()
    if (allInputsHaveValue){
        infoDiv.style.display = 'none';
        thankDiv.style.display = 'flex';
    }
  }

cvcInput.addEventListener("change", function(){
    cvcSpan.innerHTML = cvcInput.value;
    if (cvcInput.value.length > 0 ){
        e = true
    }
})
cardNumberInput.addEventListener("change", function(){
    cardNumberSpan.innerHTML = cardNumberInput.value;
    if (cardNumberInput.value.length % 4 == 0) {
        cardNumberSpan.innerHTML += " ";
        }
        if (cardNumberInput.value.length > 0 ){
            b = true
        }
})
cardNameInput.addEventListener("change", function(){
    cardNameSpan.innerHTML = cardNameInput.value;
    if (cardNameInput.value.length > 0 ){
        a = true
    }
})
cardMMInput.addEventListener("change", function(){
    cardMMSpan.innerHTML = cardMMInput.value;
    if (cardMMInput.value.length > 0 ){
        c = true
    }
})
cardYYInput.addEventListener("change", function(){
    cardYYSpan.innerHTML = cardYYInput.value;
    if (cardYYInput.value.length > 0 ){
        d = true
    }
})
function cvcFunction(){
    if(cvcInput.value === ""){
        noneP2.style.display = 'flex';
        cvcInput.style.border = '1px solid red'
}
else {
    noneP2.style.display = 'none';
    cvcInput.style.border = '1px solid #DFDEE0'
}
}
function cardMMFunction(){
    if (cardMMInput.value === ""){
        noneP1.style.display = 'flex';
        cardMMInput.style.border = '1px solid red';
    }
    else {
        noneP1.style.display = 'none';
        cardMMInput.style.border = '1px solid #DFDEE0';
    }
}
function cardYYFunction(){
    if (cardYYInput.value === ""){
        noneP1.style.display = 'flex';
        cardYYInput.style.border = '1px solid red';
    }
    else {
        noneP1.style.display = 'none';
        cardYYInput.style.border = '1px solid #DFDEE0';
    }
}
function cardNumberFunction(){
    if (cardNumberInput.value === ""){
        redP.style.display = 'flex';
        cardNumberInput.style.border = '1px solid red';
    }
    else {
        redP.style.display = 'none';
        cardNumberInput.style.border = '1px solid #DFDEE0';
    }
}


function cardNameInputFunction(){
    if (cardNameInput.value === ""){
        noneP3.style.display = 'flex';
        cardNameInput.style.border = '1px solid red';
    }
    else {
        noneP3.style.display = 'none';
        cardNameInput.style.border = '1px solid #DFDEE0';
    }
}

cardNumberInput.onkeydown = function () { {
        if (cardNumberInput.value.length % 5 == 0) {
            cardNumberInput.value += " ";
        }
    }
}
