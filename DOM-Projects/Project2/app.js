const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid hight';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML == 'please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi <= 18.6) {
      results.innerHTML = `<span>Your BMI is ${bmi} and you are Under weight. </span>`;
    } else if (bmi < 18.6 || bmi <= 24.9) {
      results.innerHTML = `<span>YOur BMI is ${bmi} and you are Normal weight.</span>`;
    } else {
      results.innerHTML = `<span>Your BMI is ${bmi} and you are over weight.</span>`;
    }
  }
});
