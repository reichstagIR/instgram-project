import "../../node_modules/swiper/swiper-bundle.js";

$(document).ready(function(){


    const header = $(".main-body");
    const headerInput = $(".main-header__item-wrapper__center-side__input");
    const subMenu = $(".main-header__item-wrapper__center-side__sub-menu");
    const subMenuResult = $(".main-header__item-wrapper__center-side__sub-menu__result");
    const subMenuMessage = $(".main-header__item-wrapper__center-side__sub-menu__empty-message");

    headerInput.on("focus" , function(){
        subMenu.css("display" , "block");
    })

    headerInput.on("keyup" , function(){
        if(!headerInput.val()){
            subMenuMessage.css("display" , "flex");
            subMenuResult.css("display" , "none");
        }else{
            subMenuMessage.css("display" , "none");
            subMenuResult.css("display" , "block");
        }
    })

    header.on("click" , function(){
        subMenu.css("display" , "none");
    })


})