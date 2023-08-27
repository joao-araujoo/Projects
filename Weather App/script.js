const apiKey = '1485f25e8514e046a28d8d5c74a9420a'

// temperatura = main.temp
// sensação = main.feels_like
// temperatura mínima = main.temp_min
// temperatura máxima = main.temp_max
// umidade = main.humidity

// condições meteorológicas (chuva, neve, nuvens) = weather.main
// descrição da condição meteorológica = weather.description
// ícone da condição meteorológica = `https://openweathermap.org/img/wn/${weather.icon}.png`

// código do país = sys.country

const getWeatherData = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`).then(response => response.json())
}

async function getTemperature(city) {
    const weatherData = await getWeatherData(city)

    const divStats = document.querySelector('.stats')
    divStats.innerHTML += `<b>Temperatura:</b> ${weatherData.main.temp}°C <br>`
    divStats.innerHTML += `<b>Sensação:</b> ${weatherData.main.feels_like}°C <br>`
    divStats.innerHTML += `<b>Temperatura mínima:</b> ${weatherData.main.temp_min}°C <br>`
    divStats.innerHTML += `<b>Temperatura máxima:</b> ${weatherData.main.temp_max}°C <br>`
    divStats.innerHTML += `<b>Umidade:</b> ${weatherData.main.humidity}% <br>`
    divStats.innerHTML += '<br><b>Condições meteorológicas:</b> ' + weatherData.weather[0].main
    divStats.innerHTML += '<br><b>Descrição:</b> ' + weatherData.weather[0].description
    document.querySelector('#weather-icon').src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    document.querySelector('#country-flag').src = `https://flagsapi.com/${weatherData.sys.country}/flat/64.png`
}

getTemperature('hong kong')