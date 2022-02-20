let exchangeEuro = 1.13;
let exchangeGbp = 1.36;
let exchangeJpy = 0.0087;
let exchangeRub = 0.013;

// Событие клик на кнопку Start
let btnStart = document.querySelector('.start__form-btn');
btnStart.addEventListener('click', checkData);


function checkData(event) {
  event.preventDefault();
  let inputDollar =+ document.querySelector('.start__currency--dollar').value;
  let inputEuro =+ document.querySelector('.start__currency--euro').value * exchangeEuro;
  let inputGbp =+ document.querySelector('.start__currency--gbp').value * exchangeGbp;
  let inputJpy =+ document.querySelector('.start__currency--jpy').value * exchangeJpy;
  let inputRub =+ document.querySelector('.start__currency--rub').value * exchangeRub;

  let sumInput = inputDollar + inputEuro + inputGbp + inputJpy + inputRub;
  renderResoult(sumInput);
}

function renderResoult(sumInput) {
  let topRes;
  let step;
  for(let i = 0; i < ranges.length; i++) {
    if(sumInput >= ranges[i].upper) {
      step = (ranges[i-1].upper - ranges[i-1].lower) / ranges[i-1].amount; // вычисляем шаг в диапазоне
      topRes = Math.floor(ranges[i-1].topStart + (ranges[i-1].upper - sumInput) / step);
      document.querySelector('.top__result').textContent = `${topRes}`;
      break;
    }
  }
}

