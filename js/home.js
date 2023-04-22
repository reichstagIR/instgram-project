
$(document).ready(function(){
    
    
    // swiper sliders
    
    
    const sliderStory = new Swiper('.swiper', {
        
        slidesPerView: 2,
        
        spaceBetween: 10,
        
        allowTouchMove: true,
        
        
        navigation: {
            nextEl: '.home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation-next',
            prevEl: '.home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation-prev',
        },


        breakpoints: {
            320: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 5,
            }
          }
        
        
    });
    
    
    new Swiper(".home__left-side__new-posts__post__body__post-slider" , {
    
        slidesPerView: 1,
        allowTouchMove: true,
        autoHeight: true,
        spaceBetween: 0,
    
        
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            bulletClass: "home__left-side__new-posts__post__body__post-slider__bullet-btn",
            bulletActiveClass: "home__left-side__new-posts__post__body__post-slider__bullet-btn--active",
        },
        
        navigation: {
            nextEl: '.home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation-next',
            prevEl: '.home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation-prev',
        },

        on: {

            slideChangeTransitionStart: function(){

                $(".home__left-side__new-posts__post__body__video").each(function(){

                    $(this).get(0).pause();

                })

                $(".post__left__swiper__video__slide__play").each(function(){

                    $(this).addClass("home__left-side__new-posts__post__body__video--play");
                    $(this).fadeIn();

                })

            }

        }
    })


    new Swiper(".home__left-side__suggest-account__slider" , {
    
        slidesPerView: 2,
        allowTouchMove: true,
        autoHeight: true,
        spaceBetween: 15,
        
        navigation: {
            nextEl: '.home__left-side__suggest-account__slider__bullet-btn-navigation-prev',
            prevEl: '.home__left-side__suggest-account__slider__bullet-btn-navigation-next',
        },
    })


    
    // short profile name in story section
    
    
    function shortText(text = ""){

        if(text.length > 12){

            return text.substring(0 , 8) + "...";

        }else{

            return text;

        }

    }


    //short store profile name

    $(".home__left-side__story-slider__slider__item__page-name").each(function(){

        const text = shortText($(this).text());

        $(this).text(text);

    })

    // single video body post 

    $(".home__left-side__new-posts__post__body__video").on("click" , function(){


        

        const videoWrapper = $(this);
        const pauseIcon = videoWrapper.next();

        if(videoWrapper.hasClass("home__left-side__new-posts__post__body__video--play")){

            $(".home__left-side__new-posts__post__body__video").each(function(){
                this.pause();
                $(this).addClass("home__left-side__new-posts__post__body__video--play");
                $(this).next().fadeIn(300);
            })

            videoWrapper.removeClass("home__left-side__new-posts__post__body__video--play");
            this.play();
            pauseIcon.fadeOut(300);
            
            
        }else{
            
            videoWrapper.addClass("home__left-side__new-posts__post__body__video--play");
            this.pause();
            pauseIcon.fadeIn(300);

        }

    })

    $(".home__left-side__new-posts__post__body__pause-icon").on("click" , function(){


        

        const videoWrapper = $(this).prev();
        const pauseIcon = $(this);

        if(videoWrapper.hasClass("home__left-side__new-posts__post__body__video--play")){

            $(".home__left-side__new-posts__post__body__video").each(function(){
                videoWrapper.get(0).pause();
                $(this).addClass("home__left-side__new-posts__post__body__video--play");
                $(this).next().fadeIn(300);
            })

            videoWrapper.removeClass("home__left-side__new-posts__post__body__video--play");
            videoWrapper.get(0).play();
            pauseIcon.fadeOut(300);
            
            
        }else{
            
            videoWrapper.addClass("home__left-side__new-posts__post__body__video--play");
            videoWrapper.get(0).pause();
            pauseIcon.fadeIn(300);

        }

    })

    $(".home__left-side__new-posts__post__body__sound").on("click" , function(){

        const iconsSoundWrapper = $(this);
        const video = this.previousElementSibling.previousElementSibling;
        console.log(video);


        if(iconsSoundWrapper.hasClass("home__left-side__new-posts__post__body__sound--active")){

            video.muted = false;
            iconsSoundWrapper.removeClass("home__left-side__new-posts__post__body__sound--active");
            
        }else{
            
            video.muted = true;
            iconsSoundWrapper.addClass("home__left-side__new-posts__post__body__sound--active");

        }

    })


    // save action

    $(".home__left-side__new-posts__post__footer__actions__item--save").on("click" , function(){
        $(this).toggleClass("home__left-side__new-posts__post__footer__actions__item--saved");
    })

    // like action

    $(".home__left-side__new-posts__post__footer__actions__item--like").on("click" , function(){
        $(this).toggleClass("home__left-side__new-posts__post__footer__actions__item--like--set")
    })


    // btn more in footer of new posts

    $(".home__left-side__new-posts__post__footer__dec__text__more").on("click" , function(){

        $(this).css("display" , "none");
        $(this).parent().parent().css("height" , "auto");

    })


})