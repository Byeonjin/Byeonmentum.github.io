const API_KEY = "f6bc1fcb03f6feda1ff9f085d2671eb0";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    console.log("You live in", lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#info");
        const city = document.querySelector("#city");
        const name = data.name;
        
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} 도`;
        city.innerText = data.name;
    });

}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);