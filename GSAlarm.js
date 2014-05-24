document.getElementById("trash").insertAdjacentHTML("afterend","<input id=\"AlarmTime\" type=\"time\" style=\"margin-top: 1px; width: 95px;margin-left: 2px;\"><button id=\"AlarmSet\" style=\"margin-left: 8px; color: #fff;background-color: #F66C00;\">Set Alarm</button>");

var setTime;
var intervalId = null;

document.getElementById("AlarmSet").onclick = function(){
    setTime = document.getElementById("AlarmTime").value;
    alert("Alarm set for: "+setTime);
    intervalId = setInterval(timeCheck, 500);    
};


function timeCheck() {
  
var timeNow = new Date();
var hourNow = timeNow.getHours() < 10 ? "0" + timeNow.getHours().toString() : timeNow.getHours();
var minutesNow = timeNow.getMinutes() < 10 ? "0" + timeNow.getMinutes().toString() : timeNow.getMinutes();
var timeString = hourNow +":"+ minutesNow;
    
    if (setTime == timeString){
  
document.getElementById("play-pause").click();
      alert("Wake Up!"); 
        clearInterval(intervalId);
    
    }  
}; 
