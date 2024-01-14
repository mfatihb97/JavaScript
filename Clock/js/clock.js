//name
let fullName = prompt("Please enter your name: ")
let greeting = document.querySelector('#myName')
greeting.innerHTML=`${greeting.innerHTML} <small style="color:red">${fullName}</small>`

//name color
var myNameElement = document.getElementById('myName');
myNameElement.style.color='color: #e98208;'

//clock

function showTime() {
    // Get the current date and time
    var date = new Date();
  
    // Get hours, minutes, and seconds
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    // Get the day of the week
    var dayOfWeek = date.getDay();
    var daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    var dayName = daysOfWeek[dayOfWeek];
    
    // Convert hours, minutes, and seconds to two-digit format
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time in an HTML element
    var timeElement = document.getElementById('myClock');
    timeElement.innerHTML = hours + ':' + minutes + ':' + seconds + '-' +dayName;
  }
  
  // Update the time every second using setInterval
  setInterval(showTime, 1000);
  
  // Call the function once when the page is loaded
  showTime();