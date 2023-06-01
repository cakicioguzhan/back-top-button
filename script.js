const navToggle = document.querySelector(".nav-toggle"),
    navMenu = document.querySelector(".nav-menu");


    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        navToggle.classList.toggle("active");
    })

// typing

var typed = new Typed(".profession-text", {
    strings: ["Web Developer", "Web Designer", "Web Monster"],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
})

// swiper

var swiper = new Swiper(".brand-container", {
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },

      loop: true,
  });

  // BACK TOP BUTTON 

  const back_btn_top = document.querySelector(".btn-top");

  window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
       back_btn_top.classList.add("active")
    }else{
        back_btn_top.classList.remove("active")
    }
  })