const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");


menuOpenButton.addEventListener("click", ()=> {
    //Toggle mobile menu visibility 
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked

menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", ()=> menuOpenButton.click());
    
})

//Intialize Swiper

const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    
    loop: true,
    spaceBetween:25,
    grabCursor:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive Breakpoints

    breakpoints: {
        0: {
            slidesPerView: 1 
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        }
    }

  
  });