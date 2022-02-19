let exchangeEuro = 1.13;
let exchangeGbp = 1.36;
let exchangeJpy = 0.0087;
let exchangeRub = 0.013;

// Событие клик на кнопку Start
let btnStart = document.querySelector('.start__form-btn');
btnStart.addEventListener('click', check);


function check(event) {
  event.preventDefault();
  let inputDollar =+ document.querySelector('.start__currency--dollar').value;
  let inputEuro =+ Math.ceil(document.querySelector('.start__currency--euro').value * exchangeEuro);
  let inputGbp =+ Math.ceil(document.querySelector('.start__currency--gbp').value * exchangeGbp);
  let inputJpy =+ Math.ceil(document.querySelector('.start__currency--jpy').value * exchangeJpy);
  let inputRub =+ Math.ceil(document.querySelector('.start__currency--rub').value * exchangeRub);
  
  let checkSum = document.querySelector('.sum__button').checked; 
  if(checkSum === true) {
    let sumInput = inputDollar + inputEuro + inputGbp + inputJpy + inputRub;
    document.querySelector('.top__result').textContent = `Привет, Димон. В твоём кошельке все вместе: ${sumInput}$`
  } else {
    console.log('Выключено');
  }
}

// fetch('http://api.coinlayer.com/live?access_key=4ed147814b987e83ed288fd73aa3e14f')
//   .then(response => response.json())
//   .then(resp => console.log(resp));