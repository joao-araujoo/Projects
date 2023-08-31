const apiKey = '1485f25e8514e046a28d8d5c74a9420a'

const daysOfWeek = [
    "Sunday", "Monday", "Thuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
];

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function getDate(){
    const now = new Date();
    
    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];

    return {dayOfWeek, day, month}
}

function changeCard(){
    document.querySelector('.search-card').classList.toggle('hidden')
    document.querySelector('.forecast-card').classList.toggle('hidden')
    setTimeout(() => {
        document.querySelector('.forecast-card .header').classList.toggle('skeleton')
        document.querySelector('.forecast-card .main-stats').classList.toggle('skeleton')
        document.querySelector('.forecast-card .extra-stats').classList.toggle('skeleton')
    }, 1000)
}

const getWeatherData = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`).then(response => response.json())
}

async function getWeather() {
    const city = document.querySelector('#city-input').value
    const weatherData = await getWeatherData(city)

    // temperature
    document.querySelector('.temp h2').innerText = `${weatherData.main.temp.toFixed(0)}°`

    // date
    const {dayOfWeek, day, month} = getDate()
    document.querySelector('.date .day-of-week').innerText = dayOfWeek
    document.querySelector('.date .day-month').innerText = `${day} ${month}`

    // weather icon
    document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

    // location
    document.querySelector('.city').innerText = weatherData.name 
    document.querySelector('.country-flag').src = `https://flagsapi.com/${weatherData.sys.country}/flat/16.png`

    // wind
    document.querySelector('.wind p').innerText = `${weatherData.wind.speed} km/h`

    // humidity
    document.querySelector('.humidity p').innerText = `${weatherData.main.humidity}%`

    // cloudiness
    document.querySelector('.cloudiness p').innerText = `${weatherData.clouds.all}%`

    changeCard()
}