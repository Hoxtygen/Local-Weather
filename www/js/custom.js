window.onload = init

function init () {
  getWeatherDetails()
}

function getWeatherDetails () {
  var request = new XMLHttpRequest()
  request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=9.081999&lon=8.675277', true)
  request.onreadystatechange = function () {
    if (this.readyState === this.DONE && this.status === 200) {
      if (this.responseText) {
          var stringified = JSON.parse(this.responseText);
        console.log(stringified);
      }else {
          
        console.log("Error: can't get any data from that source")
      }
    }
  }
  request.send()
}
