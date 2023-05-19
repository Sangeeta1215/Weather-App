var url="https://api.openweathermap.org/data/2.5/weather?";
var appid="0518600400a7c09fc0275e93afb2230f";
main("jammu");  
 const input=document.querySelector("#input");
 const btn=document.querySelector(".button");
 btn.addEventListener("click",(e)=>
 {
    var city=input.value ;
     main(city);
 })
         var city1=document.querySelector(".city");
         var temp=document.querySelector(".temp");
         var humidity=document.querySelector(".humidity");
         var wind=document.querySelector(".wind");
         var details=document.querySelector(".details");
         var notcity=document.querySelector(".notcity");
    function myfun(data)
    {
       var city=data.name;
       if((city==undefined)||(city==''))
       {
        notcity.style.display="block";
        details.style.display="none";
       }
       else
      {
        details.style.display="block";
        notcity.style.display="none";
        city1.innerHTML=data.name;
         temp.innerHTML=data.main.temp +`°c`;
         humidity.innerHTML=data.main.humidity +`%`;
         wind.innerHTML=data.wind.speed +`km/h`;
       }
    }
   //  function main(city)
   //  {
   //   fetch(`${url}q=${city}&appid=${appid}&units=metric`)
   //   .then(response=>response.json()).then(data=>myfun(data) );
   //  }

async function main(city)
{
var fetchdata=await fetch(`${url}q=${city}&appid=${appid}&units=metric`);                 
var res=await fetchdata.json();
myfun(res);
}
