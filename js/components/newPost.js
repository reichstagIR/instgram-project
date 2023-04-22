import insertText from 'https://cdn.jsdelivr.net/npm/insert-text-at-cursor@0.3.0/index.js';


$(document).ready(function(){

    const modalRunnerBtn = $(".main-header__item-wrapper__left-side__icon--new-post");
    const modalBackground = $(".addpost");
    const modalWrapper = $(".addpost__modal-wrapper");
    const closeModalBtn = $(".discard");
    const filePanel = $(".addpost__modal-wrapper__panel--file");
    const settingPanel = $(".addpost__modal-wrapper__panel--setting");
    const fileInput = document.querySelector("#selected-file");
    const singePreview = $(".addpost__modal-wrapper__section--post-setting__preview__single");
    const singeImgPreview = $(".addpost__modal-wrapper__section--post-setting__preview__single__img");
    const singleVideoPreview = $(".addpost__modal-wrapper__section--post-setting__preview__single__video");
    const sliderPreviewContainer = $(".addpost__modal-wrapper__section--post-setting__preview__slider");
    const sliderPreviewWrapper = $(".swiper-wrapper-add-post");


    
    const readPost = (file) => {


        
        
        if(file.length === 1){
            
            const reader = new FileReader();

            const format = file[0].type.split("/")[0];

            singePreview.css("display" , "block");

            if(format === "video")
            {


                singeImgPreview.css("display" , "none");
                reader.onload = (e) => singleVideoPreview.attr("src" , e.target.result).css("display" , "block");


            }else{

                singleVideoPreview.css("display" , "none");
                reader.onload = (e) => singeImgPreview.attr("src" , e.target.result).css("display" , "block");

            }


            reader.readAsDataURL(file[0]);


    
        }else{

            
            sliderPreviewContainer.css("display" , "block");
            

            
            for(let i = 0 ; i < file.length ; i++){

                const reader = new FileReader();
                const format = file[i].type.split("/")[0];
    
    
                if(format === "video")
                {
    
                    reader.onload = (e) => sliderPreviewWrapper.append(`<div class="swiper-slide addpost__modal-wrapper__section--post-setting__preview__slider__slide"><video src="${e.target.result}" loop controls class="addpost__modal-wrapper__section--post-setting__preview__slider__slide__video"></video></div>`);
                    reader.readAsDataURL(file[i]);
    
                }else{
    
                    reader.onload = (e) => sliderPreviewWrapper.append(`<div class="swiper-slide addpost__modal-wrapper__section--post-setting__preview__slider__slide"><img src="${e.target.result}" alt="post-preview"class="addpost__modal-wrapper__section--post-setting__preview__slider__slide__img"></div>`);
                    reader.readAsDataURL(file[i]);
    
                }
            }

        }
    
    
    }

    const disCard = () => {

        singleVideoPreview.removeAttr("src").css("display" , "none");
        singeImgPreview.removeAttr("src").css("display" , "none");
        sliderPreviewWrapper.html();
        sliderPreviewContainer.css("display" , "none");
        fileInput.value = "";
        $("textarea").val("");
        modalWrapper.removeClass("addpost__modal-wrapper--bigger");
        modalBackground.css("display" , "block");
        filePanel.addClass("addpost__modal-wrapper__panel--active");
        settingPanel.removeClass("addpost__modal-wrapper__panel--active");

    }


    modalRunnerBtn.on("click" , function(){

        modalBackground.css("display" , "block");
        
    })
    
    
    closeModalBtn.on("click" , function(){

        disCard();
        modalBackground.css("display" , "none");

    })


    fileInput.addEventListener("change" , function(){

        $(".addpost__modal-wrapper__panel--active").removeClass("addpost__modal-wrapper__panel--active").next().addClass("addpost__modal-wrapper__panel--active");
        modalWrapper.addClass("addpost__modal-wrapper--bigger");
        readPost(fileInput.files);
        

    })


    $(".addpost__modal-wrapper__section--post-setting__options__picker svg").on("click" , function(){

        $("emoji-picker").first().toggleClass("addpost__modal-wrapper__section--post-setting__options__picker--active")

    })


    document.querySelector("emoji-picker").addEventListener("emoji-click", e => {
        insertText(document.querySelector("textarea"), e.detail.unicode);
    })



    new Swiper(".addpost__modal-wrapper__section--post-setting__preview__swiper" , {
    
        slidesPerView: 1,
        allowTouchMove: false,
        spaceBetween: 0,
    
        
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            
        },

        navigation: {
            nextEl: '.home__left-side__suggest-account__slider__bullet-btn-navigation-prev',
            prevEl: '.home__left-side__suggest-account__slider__bullet-btn-navigation-next',
        },
        
    })


})