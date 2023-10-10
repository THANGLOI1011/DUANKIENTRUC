// Hide header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 500);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}



// backtop
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $('#backtop').fadeIn();
        }else{
            $('#backtop').fadeOut();
        }
    });
    $('#backtop').click(function(){
        $('body,html').animate({
            scrollTop:0
        },500)
    })
});


// silde
const listImage = document.querySelector('.header-main')
const imgs = document.querySelectorAll('.header-main img')
let current = 0
const arrowRight = document.querySelector('.arrow-right')
const arrowLeft = document.querySelector('.arrow-left')
const length = imgs.length

const handleChangslide = () =>{
    if (current == length - 1 ){
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
        document.querySelector('.active').classList.remove('.active')
        document.querySelector('.index-item-'+ current).classList.add('.active')
    }else{
        current ++
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')

    }
}
    let handleEventChangeSlide =  setInterval(handleChangslide,5000)

    arrowRight.addEventListener('click', ()=>{
        clearInterval(handleEventChangeSlide)
        handleChangslide()
        handleEventChangeSlide = setInterval(handleChangslide,5000)
    })

    arrowLeft.addEventListener('click', ()=>{
        
        clearInterval(handleEventChangeSlide)
        if (current == 0 ){
            current = length - 1
            let width = imgs[0].offsetWidth
            listImage.style.transform = `translateX(${width * -1 * current}px)`
            document.querySelector('.active').classList.remove('.active')
            document.querySelector('.index-item-'+ current).classList.add('.active')
            
        }else{
            current --
            let width = imgs[0].offsetWidth
            listImage.style.transform = `translateX(${width * -1 * current}px)`
            document.querySelector('.active').classList.remove('active')
            document.querySelector('.index-item-'+ current).classList.add('active')
        }
        handleEventChangeSlide = setInterval(handleChangslide,5000)
    })



// loading
const btnA = document.querySelector(".ti-search");
const iconLoading = document.querySelector(".loading");

    btnA.addEventListener("click", () => iconLoading.classList.add("open-loading"));
    setInterval(()=>{
        iconLoading.classList.remove("open-loading");
    },3000)



    // menu
    const Btnmenu = document.querySelector("#ti-menu");
    const Btnclose = document.querySelector("#ti-close");
    const Overlay = document.querySelector(".overlay-menu");
    const showhide = document.querySelector(".showhide-menu-item")

    Btnmenu.addEventListener("click",() => showhide.classList.add("open-menu"));
    Btnmenu.addEventListener("click",() => Overlay.classList.add("open-menu"));
    Btnclose.addEventListener("click",() => showhide.classList.remove("open-menu"));
    Btnclose.addEventListener("click",() => Overlay.classList.remove("open-menu"));
