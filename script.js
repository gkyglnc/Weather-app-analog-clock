//! SAAT // 
const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");


if (localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {

    body.classList.toggle("dark");
    
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
  })


  const updateTime = () => {
    
    let date = new Date(),
      secToDeg = (date.getSeconds() / 60) * 360,
      minToDeg = (date.getMinutes() / 60) * 360,
      hrToDeg = (date.getHours() / 12) * 360;
    
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);

updateTime();


let lat;
let lon;

if ("geolocation" in navigator) {

  navigator.geolocation.getCurrentPosition(function(position) {
    lat= position.coords.latitude;
    lon = position.coords.longitude;
    // console.log("Latitude: " + lat + ", Longitude: " + lon);
    checkWeather();
  }, function(error) {
    console.error("Konum bilgisi alinamadi: " + error.message);
  });
} else {
  console.error("Konum bilgisi desteklenmiyor.");
}   

//! Weathep app //

const checkWeather = async() =>{

const apiKey = "9bd7cef2305ec3cae8f8a8cc57a2ff54";
const apiUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
const weatherIcon = document.querySelector(".weather-icon");
const day1Icon= document.querySelector(".day1img");
const day2Icon = document.querySelector(".day2img");
const day3Icon = document.querySelector(".day3img");
const day4Icon = document.querySelector(".day4img");
const day5Icon = document.querySelector(".day5img");

// console.log(apiUrl,"apiurl")

fetch(apiUrl)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok. Status: ' + response.status);
        }
        return response.json();
    })
    .then(function(data) {
      console.log(data)
      document.querySelector(".city").innerHTML = data?.city?.name;
      document.querySelector(".temp").innerHTML =  Math.round(data?.list[0]?.main?.temp)  + "°c";
      document.querySelector(".humidity").innerHTML = data?.list[0].main?.temp + "%";
      document.querySelector(".wind").innerHTML = data?.list[0].wind?.speed + "km/h";
      //*
      document.querySelector(".day1temp").innerHTML = Math.round(data?.list[0].main?.temp) + "°c";
      document.querySelector(".day2temp").innerHTML = Math.round(data?.list[6].main?.temp) + "°c";
      document.querySelector(".day3temp").innerHTML = Math.round(data?.list[14].main?.temp) + "°c";
      document.querySelector(".day4temp").innerHTML = Math.round(data?.list[22].main?.temp) + "°c";
      document.querySelector(".day5temp").innerHTML = Math.round(data?.list[30].main?.temp) + "°c";

      
  if(data.list[0].weather[0].main == "Clouds"){
    weatherIcon.src = "animated/cloudy.svg";
  }else if(data.list[0].weather[0].main == "Clear"){
    weatherIcon.src = "animated/day.svg";
  }else if(data.list[0].weather[0].main == "Rain"){
    weatherIcon.src = "animated/rainy-6.svg";
  }else if(data.list[0].weather[0].main == "Drizzle"){
    weatherIcon.src = "animated/rainy-1.svg";
  }else if(data.list[0].weather[0].main == "Mist"){
    weatherIcon.src = "animated/cloudy";
  }

  if(data.list[0].weather[0].main == "Clouds"){
    day1Icon.src = "animated/cloudy.svg";
  }else if(data.list[0].weather[0].main == "Clear"){
    day1Icon.src = "animated/day.svg";
  }else if(data.list[0].weather[0].main == "Rain"){
    day1Icon.src = "animated/rainy-6.svg";
  }else if(data.list[0].weather[0].main == "Drizzle"){
    day1Icon.src = "animated/rainy-1.svg";
  }else if(data.list[0].weather[0].main == "Mist"){
    day1Icon.src = "animated/cloudy";
  }

  if(data.list[6].weather[0].main == "Clouds"){
    day2Icon.src = "animated/cloudy.svg";
  }else if(data.list[6].weather[0].main == "Clear"){
    day2Icon.src = "animated/day.svg";
  }else if(data.list[6].weather[0].main == "Rain"){
    day2Icon.src = "animated/rainy-6.svg";
  }else if(data.list[6].weather[0].main == "Drizzle"){
    day2Icon.src = "animated/rainy-1.svg";
  }else if(data.list[6].weather[0].main == "Mist"){
    day2Icon.src = "animated/cloudy";
  }

  if(data.list[14].weather[0].main == "Clouds"){
    day3Icon.src = "animated/cloudy.svg";
  }else if(data.list[14].weather[0].main == "Clear"){
    day3Icon.src = "animated/day.svg";
  }else if(data.list[14].weather[0].main == "Rain"){
    day3Icon.src = "animated/rainy-6.svg";
  }else if(data.list[14].weather[0].main == "Drizzle"){
    day3Icon.src = "animated/rainy-1.svg";
  }else if(data.list[14].weather[0].main == "Mist"){
    day3Icon.src = "animated/cloudy";
  }

  if(data.list[22].weather[0].main == "Clouds"){
    day4Icon.src = "animated/cloudy.svg";
  }else if(data.list[22].weather[0].main == "Clear"){
    day4Icon.src = "animated/day.svg";
  }else if(data.list[22].weather[0].main == "Rain"){
    day4Icon.src = "animated/rainy-6.svg";
  }else if(data.list[22].weather[0].main == "Drizzle"){
    day4Icon.src = "animated/rainy-1.svg";
  }else if(data.list[22].weather[0].main == "Mist"){
    day4Icon.src = "animated/cloudy";
  }

  if(data.list[30].weather[0].main == "Clouds"){
    day5Icon.src = "animated/cloudy.svg";
  }else if(data.list[30].weather[0].main == "Clear"){
    day5Icon.src = "animated/day.svg";
  }else if(data.list[30].weather[0].main == "Rain"){
    day5Icon.src = "animated/rainy-6.svg";
  }else if(data.list[30].weather[0].main == "Drizzle"){
    day5Icon.src = "animated/rainy-1.svg";
  }else if(data.list[30].weather[0].main == "Mist"){
    day5Icon.src = "animated/cloudy";
  }

    })
    .catch(function(error) {
        console.error('Hata ile karşılaşıldı:', error);
    });

};

//! GÜNLERİ SIRALAMA //

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }

//! Sayfa yüklendiğinde fonksiyonu çağırma //

window.onload = async function() {
  checkWeather();
};
