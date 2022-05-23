let api_key = "a6a2c1889ca57e64fbfee52337c6c660";
const inputValue = document.querySelector(".inputCity");
const weathers = document.querySelector(".weathers");
let Details = {};


inputValue.addEventListener("keyup", e =>{
   if (e.key === "Enter" && inputValue.value !== ''){
      getApiCall(inputValue.value);
      inputValue.value = '';
      
   }
   
   
})


function getApiCall(city){
   let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

   fetch(api)
   .then((response) => response.json())
   .then((response) => getDetails(response))
   .catch( err => {
      if (typeof err.text === 'function') {
        err.text().then(errorMessage => {
          this.props.dispatch(displayTheError(errorMessage))
          
        });
      } else {
           
           alert("Enter Valid City name");
      }
   }

   )}

function getDetails(data){
   let city = data.name;
  
   let temp = data.main.temp;
  
   let feelTemp = data.main.feels_like;

   let hum = data.main.humidity;

   let {description} = data.weather[0];
   Details.city = city;
   Details.temp = temp;
   Details.feelTemp = feelTemp;
   Details.hum = hum;
   Details.description = description;


   //console.log(`city: ${city} temp: ${temp} fell: ${fellTemp} humidity: ${hum} desc: ${description}` );
   console.log(Details);
   createWea(Details);
}

function createWea(details){
                                                      //weather
   const weather = document.createElement('div');
   weather.classList.add("weather");
   weathers.appendChild(weather);
                                                       //picture
   const pic = document.createElement('img');
   pic.classList.add('pic');

   setImg(pic, details.description);


   weather.appendChild(pic);
                                                      //temperature
   const temperature = document.createElement('h1');
   temperature.id = 'temp';
   temperature.innerHTML = Math.floor(details.temp) + "°C";
   weather.appendChild(temperature);
   
                                                       //status
   const status = document.createElement('h2');
   status.id = 'status';
   status.innerHTML = details.description;
   weather.appendChild(status);
                                                      //city
   const city = document.createElement('h2');
   city.id = 'City';
   city.innerHTML = details.city; 
   weather.appendChild(city);
                                                       //infos
   const infos = document.createElement('div');
   infos.classList.add('infos');
   weather.appendChild(infos);
                                                        //feeling
   const feeling = document.createElement('div');
   feeling.classList.add('feeling');
   infos.appendChild(feeling);
                                                         //temppic
   const tempPic = document.createElement('img');
   tempPic.classList.add('tempPic');
   tempPic.src = "Pics/warm.png";
   feeling.appendChild(tempPic);
                                                         //feelTemp
   const fellTemp = document.createElement('h6');
   fellTemp.innerHTML = Math.floor(details.feelTemp) + "°C"+ "<br>" + "Feels Like";
   feeling.appendChild(fellTemp);
                                                         //humidity
   const humidity = document.createElement('div');
   humidity.classList.add('humidity');
   infos.appendChild(humidity);
                                                          //humPic
   const humPic = document.createElement('img');
   humPic.classList.add('humPic');
   humPic.src = "Pics/humidity.png";
   humidity.appendChild(humPic);
                                                           //humidityText
   const humText = document.createElement('h6');
   humText.innerHTML = details.hum+ "% <br> humidity";
   humidity.appendChild(humText);                                                      
                                 
   weathers.appendChild(weather);

   console.log(details.city);
   

   

}

function setImg(Pic, situation){
   if (situation.includes('clear')){
      Pic.src = "Pics/clear.svg"
      console.log("true");
   }
   if (situation.includes('rain')){
      Pic.src = "Pics/rain.svg";
      console.log("true");
   }
   if (situation.includes('cloud')){
      Pic.src = "Pics/cloud.svg"
      console.log("true");
   }
   if (situation.includes('storm')){
      Pic.src = "Pics/storm.svg"
      console.log("true");
   }
   if (situation.includes('snow')){
      Pic.src = "Pics/snow.svg"
      console.log("true");
   }
   if (situation.includes('mist')){
      Pic.src = "Pics/haze.svg"
      console.log("true");
   }
   
}