const date=document.getElementById("date");
const day=document.getElementById("day");
const month=document.getElementById("month");
const year=document.getElementById("year");



//get todays date

const today=new Date();
// let leadingZero = "";
// if (today.getDate() < 10) {
//   leadingZero = "0";
// }

// date.innerHTML= leadingZero + today.getDate();
date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();

year.innerHTML=today.getFullYear();


//to display the day and month in text

const weekDays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];//index start[0]
const allMonths = [
    "January",//index[0]
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December" //index[11]
  ];

  day.innerHTML=weekDays[today.getDay()];
  month.innerHTML=allMonths[today.getMonth()];