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
            temp.innerHTML = (stringified.main.temp).toFixed(0) + '&#176;'
            var weatherCondition = document.getElementById('weather-condition')
            weatherCondition.innerHTML = stringified.weather[0].description
            var celsius = (stringified.main.temp).toFixed(0);
            var btn = document.getElementById("btn");
            var temp1 = convertToF(celsius);

            function convertToF (celsius) {
              var fahrenheit;
              // Only change code below this line
              fahrenheit = (celsius * 9 / 5) + 32;

              // Only change code above this line
              return fahrenheit + "&#176;";
            }
            convertToF(celsius);

            btn.onclick = function () {
              if (btn.innerText === "C") {
                btn.innerText = "F";
                temp.innerHTML = temp1;
              }   else {
                btn.innerText = "F";
                btn.innerHTML = temp;
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

/* 
Find out how to make the returned icon the source of the image.
*/
