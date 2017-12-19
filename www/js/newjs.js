window.onload = function ()      {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position)        {
            var longt = position.coords.longitude;
            var latt = position.coords.latitude;

            var request = new XMLHttpRequest();
            request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=' + latt + '&lon=' + longt, true);
            request.onreadystatechange = function () {
                if (request.readyState === request.DONE && request.status === 200) {
                    if (request.responseText) {
                        var stringified = JSON.parse(request.responseText);
                        console.log(stringified);
                        var location = document.getElementById("location");
                        location.innerHTML = stringified.name + ", " +  stringified.sys.country;
                        var temp = document.getElementById("temperature");
                        temp.innerHTML = stringified.main.temp;
                        var weatherCondition = document.getElementById("weather-condition");
                        weatherCondition.innerHTML = stringified.weather[0].description;
                        // var image = document.getElementById("image");
                        // image.innerHTML = stringified.weather[0].icon;
                    } else {
                        console.log("Error: Can't get any data from that source");
                    }
                }
            };
            request.send();
        });
    }
};

/* 
Make the three circles align together on the same line.
Add a span tag to the temperature div, make it clickable so it can be used for temperature conversion.
Remove the date and time part, do enough to complete the challenge then get back to it to complete whatever accesories
I want to add.
Let the Weather update circle be at the top
Find out how to make the returned icon the source of the image.
Add background image
Find a suitable color to give the circles so they match with the background image

*/