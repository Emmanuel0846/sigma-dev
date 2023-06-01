
//hamburger toggle

$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});

//scroll on reveal animation
window.addEventListener('scroll', reveal);

 function reveal(){
   var reveals = document.querySelectorAll('.reveal');

   for(var i = 0; i < reveals.length; i++){

     var windowheight = window.innerHeight;
     var revealtop = reveals[i].getBoundingClientRect().top;
     var revealpoint = 150;

     if(revealtop < windowheight - revealpoint){
       reveals[i].classList.add('active');
     }
     else{
       reveals[i].classList.remove('active');
     }
   }
 }
 // javascript real time
 setInterval(() => {

 const time = document.querySelector(".time")

 let newdate = new Date()

 let hour = newdate.getHours()
 let minutes = newdate.getMinutes()
 let seconds = newdate.getSeconds()

 day_night= "AM"
 if (hour> 12){
  day_night= "PM";
  hour = hour-12
 }
 if (hour < 10)
 hour = "0" + hour;
if (minutes < 10)
 minutes ="0" + minutes;
if (seconds < 10)
  seconds = "0" + seconds;
time.textContent = hour + ":"+ minutes + ":"+ day_night ;

 });
 
 //image slider


document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide').mount();
  new WOW().init();
});

//progress bar top
const scrollProgress = () => {
  return {
    init() {
      window.addEventListener('scroll', () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        this.percent = Math.round((winScroll / height) * 100)
      })
    },
    circumference: 30 * 2 * Math.PI,
    percent: 0,
  }
}

//zoom on scroll
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $(".heroImg").css({
    backgroundSize: (100 + scroll/15)  + "%",
    top: -(scroll/10)  + "%",

  });
  
});




