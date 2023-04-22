$(document).ready(function(){




    new Swiper(".profile__middle__slider" , {
    

        allowTouchMove: true,
        spaceBetween: 0,
        slidesPerView: 2,
    
        
        navigation: {
            prevEl: '.home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation-prev',
            nextEl: '.home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation-next',
        },

        breakpoints: {

          320: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },

          768: {
            slidesPerView: 6,
          },   

      }

    })

})