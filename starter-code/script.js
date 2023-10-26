function calBmi() {
  let height = document.getElementById('height').value
  let weight = document.getElementById('weight').value

  let bmi = (weight / (height * height) * 703)

  document.getElementById('heading').innerHTML = 'Your BMI is :'
  document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)
//  document.getElementById('message').innerHTML('Your ideal range should be between 18.5 to 24.9')

  if (bmi <= 18.4) {
    document.getElementById('message').innerHTML = 'You are under weight'
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('message').innerHTML = 'You are at a healthy weight'
  } else {
    document.getElementById('message').innerHTML = 'You are overweight'
  }
}

function reload() {
  window.location.reload()
}