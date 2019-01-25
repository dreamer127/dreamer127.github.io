'use strict';
( function (){
const header = document.querySelector('.header');
let scrollOld = document.documentElement.scrollTop;
window.onscroll = function() {
  
  if(scrollOld < document.documentElement.scrollTop && window.pageYOffset > header.clientHeight){
    scrollOld = document.documentElement.scrollTop;
    header.style.visibility = "hidden";
    header.className = header.className + " hidden";
    return header.style.opacity = "0";
  }

  if(scrollOld > document.documentElement.scrollTop){
    scrollOld = document.documentElement.scrollTop;
    if(scrollOld === document.documentElement.scrollTop && document.documentElement.scrollTop > header.clientHeight){
      header.style.opacity = "1";
      header.style.visibility = "";
      return header.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }else{
      header.style.backgroundColor = "";
      header.style.visibility = "";
    }
    return header.style.opacity = "1";
  }
  
}
})();