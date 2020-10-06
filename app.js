const NavSlide = () => {
    const burger = document.querySelector(".bars");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelector(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle("toggle");
    });

}


NavSlide();



$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
})