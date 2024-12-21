// typing animation

var typed = new Typed(".typing", {
    strings: ["", "Front-End Developer", "Web Designer", "ReactJs Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
})

// Reveal Elements On Scroll

window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight -revealpoint){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}

