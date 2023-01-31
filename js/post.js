import insertText from 'https://cdn.jsdelivr.net/npm/insert-text-at-cursor@0.3.0/index.js';

$(document).ready(function(){


    const postSlider = new Swiper(".post__left__swiper" , {
    
        slidesPerView: 1,
        allowTouchMove: false,
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

                $(".post__left__video").each(function(){

                    $(this).get(0).pause();

                })

                $(".post__left__swiper__video__slide__play").each(function(){

                    $(this).removeClass("post__left__swiper__video__slide__play--play");
                    $(this).fadeIn();

                })

            }

        }

            
    })
    

    const setCommentHeight = () => {

        const imgHeight = Number.parseFloat($(".post__left").css("height").split("px")[0]);
        const headerHeight = Number.parseFloat($(".post__right__account").css("height").split("px")[0]);
        const actionsHeight = Number.parseFloat($(".post__right__actions").css("height").split("px")[0]);
        const inputHeight = Number.parseFloat($(".post__right__send").css("height").split("px")[0]);
        const dateHeight = Number.parseFloat($(".post__right__info").css("height").split("px")[0]);

        console.log(actionsHeight);
        
        const finalHeight = imgHeight - headerHeight - actionsHeight - 3 - inputHeight - dateHeight;
        $(".post__right__comments").css("height" , finalHeight + "px");
    }

    setCommentHeight();

    $(window).on("resize" , function(){
        setCommentHeight();
    })
    


    $(".post__right__comments__comment__like").on("click" , function(){

        $(this).toggleClass("post__right__comments__comment__like--active");

    })


    $(".post__left__swiper__video__slide").on("click" , function(){

        const activeSlide = $(".swiper-slide-active video");
        const play = $(this).children(".post__left__swiper__video__slide__play");

        if(play.hasClass("post__left__swiper__video__slide__play--play")){

            play.removeClass("post__left__swiper__video__slide__play--play");
            play.fadeIn();
            activeSlide.get(0).pause();

        }else{

            play.addClass("post__left__swiper__video__slide__play--play");
            play.fadeOut();
            activeSlide.get(0).play();

        }

    })


    $(".post__left__swiper__video__slide__sound").on("click" , function(event){

        event.stopPropagation();

        const activeSlide = $(".swiper-slide-active video");

        if($(this).hasClass("post__left__swiper__video__slide__sound--active")){

            activeSlide.get(0).muted = false;
            $(this).removeClass("post__left__swiper__video__slide__sound--active");

        }else{

            activeSlide.get(0).muted = true;
            $(this).addClass("post__left__swiper__video__slide__sound--active");

        }

    })

    
    $(".post__right__actions__like").on("click" , function(){

        $(this).toggleClass("post__right__actions__like--active");

    })

    $(".post__right__actions__save").on("click" , function(){

        $(this).toggleClass("post__right__actions__save--active");

    })

    $(".post__right__send__input").on("keyup" , function(){

        if($(this).val()){

            $(".post__right__send__btn").get(0).disabled  = false;

        }else{

            $(".post__right__send__btn").get(0).disabled  = true;

        }

    })


    $(".post__right__send__emoji-wrapper svg").on("click" , function(){

        $(".post__right__send__emoji-wrapper__emoji-picker").toggleClass("post__right__send__emoji-wrapper__emoji-picker--show");

    })


    document.querySelector('.post__right__send__emoji-wrapper__emoji-picker').addEventListener('emoji-click', e => {
        insertText(document.querySelector('.post__right__send__input'), e.detail.unicode);
        $(".post__right__send__btn").get(0).disabled  = false;
        
    })


})