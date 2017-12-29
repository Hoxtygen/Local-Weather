/* window.onload = init

function init () {
  getWeatherDetails()
}

function getWeatherDetails () {
  var request = new XMLHttpRequest()
  request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=9.081999&lon=8.675277', true)
  request.onreadystatechange = function () {
    if (this.readyState === this.DONE && this.status === 200) {
      if (this.responseText) {
        var stringified = JSON.parse(this.responseText)
        console.log(stringified)
      }else {
        console.log("Error: can't get any data from that source")
      }
    }
  }
  request.send()
} */

function convertToF (celsius) {
  var fahrenheit
  // Only change code below this line
  fahrenheit = (celsius * 9 / 5) + 32

  // Only change code above this line
  return fahrenheit
}

// Change the inputs below to test your code
console.log(convertToF(23))

<<<<<<< HEAD
// btn.onclick = function () {
//   if (btn.innerText === 'C') {
//     btn.innerText = 'F'
//     temp.innerHTML = temp1
//   }   else {
//     btn.innerText = 'F'
//     btn.innerHTML = temp
//   }
// }; // btn onclick ends

btn.onclick = function () {
  if (btn.innerText === "C") {
    btn.innerText = "F";
    temp.innerHTML = temp1;
  } else if(btn.innerText === "F") {
=======
btn.onclick = function () {
  if (btn.innerText === 'C') {
    btn.innerText = 'F'
    temp.innerHTML = temp1
  } else if (btn.innerText === 'F') {
    btn.innerText = 'C'
    temp.innerHTML = temp
  } else {
>>>>>>> test-branch
    btn.innerText = "C";
    temp.innerHTML = temp;
  }
}
