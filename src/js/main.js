let exchangeEuro = 1.13;
let exchangeGbp = 1.36;
let exchangeJpy = 0.0087;
let exchangeRub = 0.0075;

// Скрытие суммы 
let checkboxScreen = document.querySelector('.sum__button');
let hideScreen = document.querySelector('.start__form-btn-hide');
checkboxScreen.addEventListener('change', () => {
  if (checkboxScreen.checked) {
    hideScreen.classList.add('start__form-btn-hide--active');
    document.querySelectorAll('.start__currency').forEach(element => {
      element.setAttribute('type', 'password');
    });    
  } else {
    hideScreen.classList.remove('start__form-btn-hide--active');
    document.querySelectorAll('.start__currency').forEach(element => {
      element.setAttribute('type', 'text');
    });    
  }
})


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
  calcResoult(sumInput);
}

function calcResoult(sumInput) {
  let topRes;
  let step;
  for(let i = 0; i < ranges.length; i++) {
    if(sumInput >= ranges[i].upper) {
      step = (ranges[i-1].upper - ranges[i-1].lower) / ranges[i-1].amount; // вычисляем шаг в диапазоне
      topRes = Math.floor(ranges[i-1].topStart + (ranges[i-1].upper - sumInput) / step);
      break;
    } else if (sumInput < ranges[ranges.length - 1].upper) {
      step = (ranges[ranges.length-1].upper - ranges[ranges.length-1].lower) / ranges[ranges.length-1].amount;
      topRes = Math.floor(ranges[ranges.length-1].topStart + (ranges[ranges.length-1].upper - sumInput) / step);
      break;
    }
  }
  document.querySelector('.top__result').textContent = `${topRes.toLocaleString('ru')}`;
}


