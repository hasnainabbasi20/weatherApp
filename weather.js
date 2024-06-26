var cityWeather = document.getElementById('searchCity')

function getCityWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityWeather.value}&units=metric&appid=069d26b96ae41d5dc564b2bfe34e6f42`)
   .then(data => {
      return data.json()
    })
   .then(data => {
   

      var getWeatherUpdate = document.querySelector('#weatherUpdate')
           if(data.main.temp>=30){
            getWeatherUpdate.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgdvLDhX7NsI_lN7MubDDe21nSxYQc1e5nA&s" class="card-img-top" alt="...">
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
                     <img src="https://static.vecteezy.com/system/resources/thumbnails/020/568/608/small_2x/heavy-rain-drop-at-the-road-surface-bokeh-background-photo.jpg" class="card-img-top" alt="...">
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
                    else{
                      getWeatherUpdate.innerHTML = `<div class="card" style="width: 18rem;">
                      <img src="https://thumbs.dreamstime.com/b/landscape-under-cloudy-weather-green-50442614.jpg" class="card-img-top" alt="...">
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
              
          
   
         

    })
   .catch(error => {
      console.log(error)
    })
}