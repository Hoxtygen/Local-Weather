window.onload = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var longt = position.coords.longitude
      var latt = position.coords.latitude

      var request = new XMLHttpRequest()
      request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=' + latt + '&lon=' + longt, true)
      request.onreadystatechange = function () {
        if (request.readyState === request.DONE && request.status === 200) {
          if (request.responseText) {
            var stringified = JSON.parse(request.responseText)
            console.log(stringified)
            var location = document.getElementById('location')
            location.innerHTML = stringified.name + ', ' + stringified.sys.country
            var temp = document.getElementById('temperature')
            temp.innerHTML = stringified.main.temp + '&#176;'
            var weatherCondition = document.getElementById('weather-condition')
            weatherCondition.innerHTML = stringified.weather[0].description
          // var image = document.getElementById("image")
          // image.innerHTML = stringified.weather[0].icon
          } else {
            console.log("Error: Can't get any data from that source")
          }
        }
      }
      request.send()
    })
  }
}

function showTime () {
  // body...
  var date = new Date()
  var hr = date.getHours()
  var min = date.getMinutes()
  var sec = date.getSeconds()
  var session = 'AM';
  if (hr === 0) {
    hr = 12;
  }

  if (hr > 12) {
    hr = hr - 12
    session = 'PM'
  }
  hr = (hr < 10) ? '0' + hr : hr
  min = (min < 10) ? '0' + min : min
  sec = (sec < 10) ? '0' + sec : sec

  var time = hr + ':' + min + ':' + sec + ' ' + session
  document.getElementById('time').innerText = time
  setTimeout(showTime, 1000)
}

showTime()

/* 
Add a span tag to the temperature div, make it clickable so it can be used for temperature conversion.
Let the Weather update circle be at the top
Find out how to make the returned icon the source of the image.
Find a suitable color to give the circles so they match with the background image
Make a footer for the app.
write a function for the conversion of celsius to fahrenheit

*/
