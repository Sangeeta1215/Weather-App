fetch("https://api.openweathermap.org/data/2.5/weather?q=jammu&appid=0518600400a7c09fc0275e93afb2230f&units=metric")
.then(response=>response.json()).then(data=>
    {
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp +`°c`;
document.querySelector(".humidity").innerHTML=data.main.humidity +`%`;
document.querySelector(".wind").innerHTML=data.wind.speed +`km/h`;
    });
const input=document.querySelector("#input");
const btn=document.querySelector(".button");
btn.addEventListener("click",(e)=>
{
var city=input.value ;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0518600400a7c09fc0275e93afb2230f&units=metric`)
.then(response=>response.json()).then(data=>
    {
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp +`°c`;
document.querySelector(".humidity").innerHTML=data.main.humidity +`%`;
document.querySelector(".wind").innerHTML=data.wind.speed +`km/h`;
    });
}
)