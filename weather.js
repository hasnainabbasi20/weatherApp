var cityWeather = document.getElementById('searchCity')

function getCityWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityWeather.value}&units=metric&appid=069d26b96ae41d5dc564b2bfe34e6f42`)
   .then(data => {
      return data.json()
    })
   .then(data => {
   

      var getWeatherUpdate = document.querySelector('#weatherUpdate')
           if(data.weather[0].main === 'Clear'){
            getWeatherUpdate.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfav-S7nmyC_r-QMdnPLDgduVatlBDpSXxKQ&s" class="card-img-top" alt="...">
            <div class="card-body">
              <h2 class="card-text"> City : ${data.name}</h2>
              <p class="card-text"> Weather: ${data.weather[0].main}</p>
              <p class="card-text"> Temperature: ${data.main.temp}°C</p>
              <p class="card-text"> Feel:${data.main.feels_like}°C</p>
              <p class="card-text"> WindSpeed:${data.wind.speed}km/h</p>
              <p class="card-text" > Country:${data.sys.country}</p>
            </div>
            </div>`
           }
         
               else if (data.weather[0].main === 'Rain') {
                 getWeatherUpdate.innerHTML = `<div class="card" style="width: 18rem;">
                     <img src="/heavy-rain-drop-at-the-road-surface-bokeh-background-photo.jpg" class="card-img-top" alt="...">
                     <div class="card-body">
                       <h2 class="card-text"> City : ${data.name}</h2>
                       <p class="card-text"> Weather: ${data.weather[0].main}</p>
                       <p class="card-text"> Temperature: ${data.main.temp}°C</p>
                       <p class="card-text"> Feel:${data.main.feels_like}°C</p>
                       <p class="card-text"> WindSpeed:${data.wind.speed}km/h</p>
                       <p class="card-text" > Country:${data.sys.country}</p>
                     </div>
                     </div>`
                    }
                    else if(data.weather[0].main === 'Clouds'){
                      getWeatherUpdate.innerHTML = `<div class="card" style="width: 18rem;">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTDXTC_owdXTTFjLxVNHdepNSLg3QGw94rQ&s" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h2 class="card-text"> City : ${data.name}</h2>
                        <p class="card-text"> Weather: ${data.weather[0].main}</p>
                        <p class="card-text"> Temperature: ${data.main.temp}°C</p>
                        <p class="card-text"> Feel: ${data.main.feels_like}°C</p>
                        <p class="card-text"> WindSpeed:${data.wind.speed}km/h</p>
                        <p class="card-text" > Country:${data.sys.country}</p>
                      </div>
                      </div>`
                    }
                    else if(data.weather[0].main === 'Haze'){
                      getWeatherUpdate.innerHTML = `<div class="card" style="width: 18rem;">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblf6eAmImDUexxCuVh3x1uq-8sz04sRhO7Q&s" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h2 class="card-text"> City : ${data.name}</h2>
                        <p class="card-text"> Weather: ${data.weather[0].main}</p>
                        <p class="card-text"> Temperature: ${data.main.temp}°C</p>
                        <p class="card-text"> Feel: ${data.main.feels_like}°C</p>
                        <p class="card-text"> WindSpeed:${data.wind.speed}km/h</p>
                        <p class="card-text" > Country:${data.sys.country}</p>
                      </div>
                      </div>`
                    }
                      else if(data.weather[0].main === 'windy'){
                        getWeatherUpdate.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57ZcNv4Xm43ReTKvECKlrPEWug4lpc8Oz5g&s" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h2 class="card-text"> City : ${data.name}</h2>
                          <p class="card-text"> Weather: ${data.weather[0].main}</p>
                          <p class="card-text"> Temperature: ${data.main.temp}°C</p>
                          <p class="card-text"> Feel: ${data.main.feels_like}°C</p>
                          <p class="card-text"> WindSpeed:${data.wind.speed}km/h</p>
                          <p class="card-text" > Country:${data.sys.country}</p>
                        </div>
                        </div>`

                    }
              
          
   
         

    })
   .catch(error => {
      console.log(error)
    })
}