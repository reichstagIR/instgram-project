
$(document).ready(function(){


    const slideQuantity = $(".store__card__slider__slide");
    const paginationItems = $(".store__card__pagination");
    const paginationItem = $(".store__card__slider__slide");
    const pauseAction = $(".store__card__info__actions__pause");
    const muteAction = $(".store__card__info__actions__mute");
    const videosSlide = $(".store__card__slider__slide__video");
    const inputTxt = $(".store__card__box__wrapper__input");
    const inputSubmit = $(".store__card__box__wrapper__submit");
    


    new Swiper(".store__card__slider" , {

        slidesPerView: 1,
        allowTouchMove: true,

        navigation: {
            nextEl: '.home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation-next',
            prevEl: '.home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation-prev',
            disabledClass: 'home__left-side__new-posts__post__body__post-slider__bullet-btn-navigation__disable',
        },


        breakpoints: {
          
            640: {

                allowTouchMove: false,
                
            },  
  
        },


        on: {

            init: function () {

                const activeSliderChildren = $(".swiper-slide-active").children();


                if(activeSliderChildren.prop("tagName") === "VIDEO"){

                    activeSliderChildren.get(0).play();
                    pauseAction.addClass("store__card__info__actions__pause--true");
                    muteAction.removeClass("store__card__info__actions__mute--true");

                }


            },

            slideChangeTransitionEnd: function() {

                pauseAction.addClass("store__card__info__actions__pause--true");
                muteAction.removeClass("store__card__info__actions__mute--true");

                const activeSliderChildren = $(".swiper-slide-active").children();

                videosSlide.each(function(){
                    $(this).get(0).pause();
                })
                


                if(activeSliderChildren.prop("tagName") === "VIDEO"){


                    activeSliderChildren.get(0).play();
                    activeSliderChildren.prop('muted', false);
                    pauseAction.addClass("store__card__info__actions__pause--true");
                    muteAction.addClass("store__card__info__actions__mute--true");

                }

                const sliderStatus = $(".store__card__pagination__btn__status");
                const activeSideIndex = +document.querySelector(".swiper-slide-active").classList[2].split("--")[1];



                sliderStatus.css("width" , "0%");

                for(let i = 0 ; i <= activeSideIndex ; i++){

                    sliderStatus[i].style.width = "100%";
                
                }

            }

        }

    })




    for(let i = 0 ; i < slideQuantity.length ; i++){

        paginationItems.append(`<div class="store__card__pagination__btn store__card__pagination__btn--${i}"><div class="store__card__pagination__btn__status store__card__pagination__btn__status--${i}"></div></div>`);

    }

    paginationItem.each(function(index){
        $(this).addClass(`store__card__slider__slide--${index}`);
    })

    pauseAction.on("click" , function(){

        const activeSliderChildren = $(".swiper-slide-active").children();

        if(activeSliderChildren.prop("tagName") === "VIDEO"){

            if(pauseAction.hasClass("store__card__info__actions__pause--true")){

                activeSliderChildren.get(0).pause();
                pauseAction.removeClass("store__card__info__actions__pause--true");
    
            }else{
    
                activeSliderChildren.get(0).play()
    
                pauseAction.addClass("store__card__info__actions__pause--true");
    
            }


        }


    })

    muteAction.on("click" , function(){

        const activeSliderChildren = $(".swiper-slide-active").children();

        if(activeSliderChildren.prop("tagName") === "VIDEO"){

            if(muteAction.hasClass("store__card__info__actions__mute--true")){
    
                activeSliderChildren.prop('muted', true);
                muteAction.removeClass("store__card__info__actions__mute--true");
                
            }else{
                
                muteAction.addClass("store__card__info__actions__mute--true");
                activeSliderChildren.prop('muted', false);
    
            }

        }


    })

    inputTxt.on("keyup" , function(){

        if(inputTxt.val()){

            inputSubmit.css("display" , "block");

        }else{

            inputSubmit.css("display" , "none");

        }

    })

})