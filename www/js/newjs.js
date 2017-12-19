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
                    } else {
                        console.log("Error: Can't get any data from that source");
                    }
                }
            };
            request.send();
        });
    }
};