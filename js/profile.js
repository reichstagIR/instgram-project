$(document).ready(function(){




    const highlights = new Swiper(".profile__middle__slider" , {
    

        allowTouchMove: false,
        spaceBetween: 0,
        slidesPerView: 3,
    
        
        navigation: {
            prevEl: '.home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation-prev',
            nextEl: '.home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation-next',
        },

        breakpoints: {
          
          640: {
            slidesPerView: 4,
          },

          768: {
            slidesPerView: 6,
          },

          1024: {
            slidesPerView: 6,  
          }   

      }

    })



})