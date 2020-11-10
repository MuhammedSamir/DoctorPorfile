$(function(){
   //owelcursal
 $('.owl-busi').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
           items:1,
            nav:false
        },
        600:{
            items:1,
             nav:false
        },
        1000:{
            items:2,
             nav:false,
            loop:false
        },
        1200:{
            items:2,
            nav:false,
            loop:false 
        }
    
    }
});
$('.owl-business').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  responsive:{
      0:{
         items:1,
          nav:true
      },
      600:{
          items:1,
           nav:false
      },
      1000:{
          items:2,
           nav:true,
          loop:false
      },
      1200:{
          items:3,
          nav:false,
          loop:false 
      }
  
  }
});
});
//spinner function 
function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });
  // When the user scrolls down 80px from the top of the document, change nav back ground ,logo color
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector(".navbar").classList.remove('bg-transparent');
    document.querySelector(".navbar").classList.add('bg-white');
    document.querySelector(".logo").classList.remove('text-white');
    document.querySelector(".logo").style.color = 'rgb(0,155,173)';
    document.getElementById("app-btn").classList.remove('bg-white');
    document.getElementById("app-btn").classList.add('bg-main');
    document.getElementById("app-btn").classList.add('text-white');


   
  } else {
    document.querySelector(".navbar").classList.add('bg-transparent');
    document.querySelector(".navbar").classList.remove('bg-white');
    document.querySelector(".logo").classList.add('text-white');
   
    document.querySelector(".nav-item").classList.add('active');
    document.getElementById("app-btn").classList.remove('bg-main');
    document.getElementById("app-btn").classList.remove('text-white');
    document.getElementById("app-btn").classList.add('bg-white');
  }
};
//navbar toggle 
document.getElementById("collabse").addEventListener("click", function(){
  document.querySelector(".navbar-collapse").classList.toggle("left-x")
});
function removeLeft(){
  document.querySelector(".navbar-collapse").classList.remove("left-x")
};

