
function toggleMenu(){

    const menu = document.querySelector(".header-menu");
    const menuBars = document.querySelector(".header-bar");
    const menuTimes = document.querySelector(".header-times");
    if(!menu || !menuBars) return;
    menuBars && menuBars.addEventListener("click", function(){
        console.log("hello");
        menu && menu.classList.add("active");
    });

    menuBars && menuTimes.addEventListener("click", function(){
        menu && menu.classList.remove("active");
    });
    
    // document.addEventListener("click", function(e){
    //     if(!menu.contains(e.target) && !e.target.matches(".header-bar")){ 
    //         menu.classList.remove("active");
    //     }
    //     });
        
        
//         document.addEventListener("click", function(e){
//             if(!menu.contains(e.target) && !e.target.matches(".header-bar")){
//                 console.log("1")
//                 menu.classList.remove("active");
//     }
// });

}

toggleMenu();

window.addEventListener('scroll', reveal);  
function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0 ; i < reveals.length ; i++){
        var windowheight = window.innerHeight;
        var revealtop =  reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener('scroll', ontop);
var ontop = document.querySelector(".ontop");
function ontop(){
    var content = document.querySelector('body');
    var windowheight = window.innerHeight;
    var revealtop =  content.getBoundingClientRect().top;
    var revealpoint = 1000;  
    if(revealtop < windowheight - revealpoint){
        ontop.do
    }
}  