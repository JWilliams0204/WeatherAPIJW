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
 
        $(".cityName").html("<h2>" + response.name  + "</h2>");
 $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
 $(".humidity").text("Humidity: " + (response.main.humidity) + " F");
 $(".temp").text("Temperture: " + convertKelvinToF (response.main.temp) + " F");
    }) 
} 
function convertKelvinToF(kelvin) {
    return parseInt((kelvin - 273.15) * 1.8 + 32);
  };

function savetoStorage(data){

    var currentData = JSON.parse(localStorage.getItem("savedCities"))||[]
    currentData.push(data)
    localStorage.setItem("savedCities", JSON.stringify(currentData))
};
 
function showButtons(){
    var currentData = JSON.parse(localStorage.getItem("savedCities"))||[]
    currentData.forEach( function(data){
        console.log(data);
        var button = $("<button>")
        button.text(data)
        $(".Previous_Searches").append(button)
    })
}
showButtons()
 });
// searchWeather("Atlanta")
// var search = document.querySelector(".search");
// function citySearch (weather)
// var queryURL = "api.openweathermap.org/data/2.5/weather?q= " + search.value + apiKey;

// var apiKey = "aa6bfb9cc5572daa367dbfe2da7efe8c";

// var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid="
// 

