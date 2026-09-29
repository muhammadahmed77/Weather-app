function getWeather() {

    var city = document.getElementById("input").value;

    console.log("City:", city);

    var apiKey = "5deeadbf55ce1a47bb7f95cb5661c0de";

    var url = "https://api.openweathermap.org/data/2.5/weather?q="
        + city + "&appid=" + apiKey + "&units=metric";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log("Weather Data:", data);

            var temperature = data.main.temp;

            document.getElementById("humidity").innerHTML =
                "Humidity: " + data.main.humidity + "%";

            document.getElementById("wind").innerHTML =
                "Wind: " + data.wind.speed + " km/h";

            document.getElementById("Temp").innerHTML =
                 data.main.temp + "°C";

            document.getElementById("city").innerHTML = city;

            if (temperature < 10 || temperature == 10) {
                document.getElementById("envi").innerHTML = "Very Cold";
                document.body.style.backgroundImage = "url(winterrr.jpg)";
            }else if(temperature > 10 && temperature < 18){
                document.getElementById("envi").innerHTML = "Cold";
                 document.body.style.backgroundImage = "url(cool.jpg)";
            }else if(temperature > 17 && temperature < 25){
                document.getElementById("envi").innerHTML = "Cool / Mild"
                 document.body.style.backgroundImage = "url(cOOOL.jpg)";
            }else if(temperature > 24 && temperature < 31){
                document.getElementById("envi").innerHTML = "Warm"
                 document.body.style.backgroundImage = "url(Warm.jpg)";
            }else if(temperature > 30 && temperature < 36){
                document.getElementById("envi").innerHTML = "Hot"
                 document.body.style.backgroundImage = "url(hot.jpg)";
            }else{
                document.body.style.backgroundImage = "url(main.jpg)";
            }




        }).catch(error => {
            console.log("Error:", error);
        }
    );
}