const apiKey = "";
const apiUrl = "";

const searchcity = document.getElementById("#country-name")
const searchbtn = document.querySelector('.search-bar img')
const weatherIcon = document.querySelector(".weather-icon")

async function weatherfunction(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data)
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main == 'Clouds')
    {
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == 'Rain')
    {
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == 'Clear')
    {
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == 'Dizzle')
    {
        weatherIcon.src = "images/dizzle.png"
    }
    else if(data.weather[0].main == 'Mist')
    {
        weatherIcon.src = "images/mist.png"
    }
    else{
        weatherIcon.src = "images/snow.png"
    }

}
searchbtn.addEventListener('click', () =>{
    searchcity = searchcity.toLowerCase()
    weatherfunction(searchcity);
})


