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
            // var img = document.createElement('img')
            // img.src = 'stringified.weather[0].icon'
            document.getElementById('image-container').innerHTML = "<img src = " + stringified.weather[0].icon + ">" ;           var temp = document.getElementById('temperature')
            var temp0 = (stringified.main.temp).toFixed(0) + '&#176;'
            temp.innerHTML = temp0;
            var weatherCondition = document.getElementById('weather-condition')
            weatherCondition.innerHTML = stringified.weather[0].description
            var celsius = (stringified.main.temp).toFixed(0)
            var btn = document.getElementById('btn')
            var temp1 = convertToF(celsius)

            function convertToF (celsius) {
              var fahrenheit
              fahrenheit = (celsius * 9 / 5) + 32
              return fahrenheit + '&#176;'
            }
            convertToF(celsius)

            btn.onclick = function () {
              if (btn.innerText === 'C') {
                btn.innerText = 'F'
                temp.innerHTML = temp1
              } else if (btn.innerText === 'F') {
                btn.innerText = 'C'
                temp.innerHTML = temp0
              } else {
                btn.innerText = 'C'
                temp.innerHTML = temp
              }
            }

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
  var session = 'AM'
  if (hr === 0) {
    hr = 12
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

function convertToF (celsius) {
  var fahrenheit;
  fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);

/* 
Find out how to make the returned icon the source of the image.
*/
/* var img = document.createElement("img")
img.src = ""
document.getElementById("image-container").appendChild(img); */
