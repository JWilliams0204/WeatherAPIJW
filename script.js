$(document).ready(function(){

$(".search").on("click", function(){
    var cityInput = $(".subject").val()
    searchWeather(cityInput)
})


   
  
  
// console.log();

function searchWeather(city){


    var apiKey = "aa6bfb9cc5572daa367dbfe2da7efe8c";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
   
    
    

    $.ajax({

        url: queryURL,
        method: "GET",
    }) .then(function(response){
         console.log(response)
        // console.log(response.name)
        var cityName = response.name;
        savetoStorage(cityName)
    }) 
} 

function savetoStorage(data){

    var currentData = JSON.parse(localStorage.getItem("savedCities"))||[]
    currentData.push(data)
    localStorage.setItem("savedCities", JSON.stringify(currentData))
};

localStorage.setItem("lastCity", userInput);

        var localStorageCities = JSON.parse(localStorage.getItem("lastCity"));

   

$.ajax({
    url: queryURL,
    method:"GET", 
}).then(function(response){ 
console.log(queryURL);
console.log(response);

$(".city").html("<h2>" + response.name + "" + currentdate + "<h2>" + "<img src= http://openweathermap.org/img/wn/" + response.weather.icon + "@2x.png> ");
 $(".wind").text("Wind Speed: " + response.wind.speed);
 $(".humidity").text("Temperture: " + response.main.humidity);
 $(".temp").text("Temperture: " + response.main.Temp);
 });
// searchWeather("Atlanta")
// var search = document.querySelector(".search");
// function citySearch (weather)
// var queryURL = "api.openweathermap.org/data/2.5/weather?q= " + search.value + apiKey;

// var apiKey = "aa6bfb9cc5572daa367dbfe2da7efe8c";

// var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid="
// 
})
