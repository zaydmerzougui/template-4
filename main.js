let header = document.querySelector("header");
let lastScrollTop = 0;
let nav = document.querySelectorAll("nav a");
let section = document.querySelectorAll("section");
let burger = document.querySelector(".hamburger");
let des= document.querySelectorAll('.plan')
let planetsUl = document.querySelectorAll('.plan ul a')
let tech = document.querySelectorAll('.tech ')
let bullets = document.querySelectorAll('.tech ul li')

burger.addEventListener('click',function(){
    if(document.styleSheets[1].cssRules[9].cssText==="header ul { list-style: none; position: absolute; right: 0px; bottom: -135px; display: flex; flex-direction: column; align-items: end; row-gap: 0.7rem; padding: 0.7rem; z-index: 2; transform: scale(1, 0); transform-origin: right top; transition: transform 0.3s ease 0s; }"){
        document.styleSheets[1].cssRules[9].style.setProperty('transform','scale(1,1)')
    }else {
        document.styleSheets[1].cssRules[9].style.setProperty('transform','scale(1,0)')
    }
})


nav.forEach(function (e) {
  e.onclick = function () {
    nav.forEach(function (e) {
      e.classList.remove("active");
    });
    e.classList.add("active");
  };
});


window.addEventListener('load',function(){
  let scrollUp = window.scrollY;
  if (scrollUp > lastScrollTop) {
    header.style.cssText = "transform:scale(1,0)";
  } else {
    header.style.cssText = "transform:scale(1,1)";
  }
  lastScrollTop = scrollUp;

active(section,nav)
active(des,planetsUl)
})


window.addEventListener ('scroll',function () {
  let scrollUp = window.scrollY;
  if (scrollUp > lastScrollTop) {
    header.style.cssText = "transform:scale(1,0)";
  } else {
    header.style.cssText = "transform:scale(1,1)";
  }
  lastScrollTop = scrollUp;

 active(section,nav)
 active(des,planetsUl)
 active(tech,bullets)

});


function active (sec,list){
    sec.forEach(function(ele){
        list.forEach(function(e){
            if (scrollY >= ele.offsetTop && scrollY <= ele.offsetHeight+ele.offsetTop) {
                if(e.getAttribute('href')){
                e.getAttribute("href").slice(1) === ele.id
                  ? e.classList.add("active") 
                  : e.classList.remove("active");
                }else {
                    e.className === ele.id
                  ? e.classList.add("active") 
                  : e.classList.remove("active");
                }
              }
        })
    })
}



