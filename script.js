
let APIKEY = "a8db3e91dd9a4e9af1a7e0494dcecf8d";
async function getData(cityName) {
    if (cityName !== "") {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`;
        let data = await fetch(url);
        let actualData = await data.json()
        console.log(actualData);
        if (actualData.cod !== 200) {
            alert("Please enter a valid city name");
        }
        else {
            let img = actualData.weather[0].main;
            let temp = actualData.main.temp;
            let humidity = actualData.main.humidity;
            let speed = actualData.wind.speed;
            let temperature = document.querySelector(".tempcontainer");
            console.log(temperature)
            temperature.textContent = temp + "°C";
            let humi = document.querySelector(".humidity");
            humi.textContent = "Humidity : " + humidity + "%";
            let winds = document.querySelector(".wind");
            winds.textContent = "Wind Speed :" + speed + "km/h";
            let city = document.querySelector(".locationcontainer");
            city.textContent = cityName;
            let imgh = document.querySelector(".imgcontainer img");
            imgh.src = img.toLowerCase() + ".png";
        }
    }
    else {
        alert("City name is required")
    }
}




let button = document.querySelector("button");
let citysearch = "";
button.addEventListener("click", () => {
    let search = document.querySelector("input");
    citysearch = search.value;
    getData(citysearch);
})



