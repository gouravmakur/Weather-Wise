const apikey = "28567b663d0de347f176d4bbeedad49e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");



async function getWeather(cityName){

    const response = await fetch(apiurl+`${cityName}`+`&appid=${apikey}`);

    if(response.status === 404){
        document.querySelector(".error").style.display = 'block'
        document.querySelector(".weather").style.display= 'none';
        body.style.backgroundColor = rgb(45, 45, 45);
    }
    const data = await response.json();
    
    const body = document.body;
    const currentHour = new Date().getHours();
    let backgroundImage;
    
    if (currentHour >= 6 && currentHour < 12) {
        backgroundImage = `/images/mornonbg.jpg`; // morning image
    } else if (currentHour >= 12 && currentHour < 18) {
        backgroundImage = '/images/afternoonbg.jpg'; // afternoon image
    } else if (currentHour >= 18 && currentHour < 19) {
        backgroundImage = '/images/eveningbg.jpg'; // evening image
    } else {
        backgroundImage = '/images/nightbg.jpg'; // night image
    }

    body.style.backgroundImage = `url(${backgroundImage})`;

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-p").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = Math.round(data.wind.speed) + " km/hr";
    document.querySelector(".weather-icon").src = `/images/${data.weather[0].main}.png`;
    document.querySelector(".weather").style.display= 'block';
    document.querySelector(".error").style.display = 'none';

}

function saveToStorage(data){
    localStorage.setItem(JSON.stringify(data));
}
searchBtn.addEventListener('click' , () =>{
    document.querySelector(".weather").style.display = "bolck";
    getWeather(cityInput.value);
    cityInput.value = '';
});





