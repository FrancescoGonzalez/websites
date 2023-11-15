function findCoords(city) {
    let URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;

    fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status);
        }

        
        return response.json();
    })
    .then(data => {
        let error = document.getElementById("error");

        if (data.results){
            error.style.display = "none";
            let res = data.results[0];
            let lat = res.latitude;
            let lon = res.longitude;
    
            let cityElement = document.getElementById("city");
            cityElement.textContent = res.name;
    
    
            getCelsius(lat, lon);
            
        } else {
            error.textContent = `Errore: la città ${city} non è nel database`;
            error.style.display = "block";
        }
        
        
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

function getCelsius(lat, lon) {
    let URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m`;

    fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status);
        }
        
        return response.json();
    })
    .then(data => {
        let res = data.hourly;

        let wt; //weather type
        let imgName;
        switch(res.weather_code[0]) {
            case 0:
                wt = "Clear sky";
                imgName = "clear";
                break;
            case 1:
            case 2:
                wt = "Partly cloudy";
                imgName = "partially-cloudy";
                break;
            case 3:
                wt = "Overcast";
                imgName = "cloudy";
                break;
            case 45: 
            case 48:
                wt = "Fog";
                imgName = "foggy";
                break;
            case 61:
            case 63:
            case 65:
                wt = "Rain";
                imgName = "rainy";
                break;
            case 71:
            case 73:
            case 75: 
            case 77:
                wt = "Snow";
                imgName = "snowy";
                break;
            case 80:
            case 81:
            case 82:
                wt = "Rain Shower";
                imgName = "shower";
                break;
            case 95:
            case 96:
            case 99:
                wt = "Thunderstorm";
                imgName = "thunderstorm";
                break;
            default:
                wt = `Case not known (${res.weather_code[0]})`;
                imgName = "question";
                break;             
        }

        let tempInCelsius = res.temperature_2m[0] + " °C";
        let humidityValue = res.relative_humidity_2m[0] + "%";
        let windvalue = res.wind_speed_10m[0] + "Km/h";


        let temp = document.getElementById("temperature");
        temp.textContent = tempInCelsius;

        let drawing = document.getElementById("drawing");
        drawing.src = `./img/drawings/${imgName}.svg`;

        let type = document.getElementById("type");
        type.textContent = wt;

        let humidity = document.getElementById("humidity");
        humidity.textContent = humidityValue;

        let wind = document.getElementById("wind");
        wind.textContent = windvalue;

    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}



document.addEventListener("DOMContentLoaded", () => {
    findCoords("Milan");

    let input = document.querySelector("input");
    let find = document.getElementById("find");

    find.addEventListener("click", () => {
        findCoords(input.value);
    });

    let search = document.getElementById("search");
    search.addEventListener("click", () => {
        let searchBar = document.getElementById("searchBar");
        if (searchBar.style.display == "none") {
            searchBar.style.display = "block";
        } else {
            searchBar.style.display = "none";
        }
    });
});