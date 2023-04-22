import insertText from 'https://cdn.jsdelivr.net/npm/insert-text-at-cursor@0.3.0/index.js';
import "../node_modules/swiper/swiper-bundle.js";


$(document).ready(function(){

    const form = $(".directs__left__text-box");
    const txtInput = $(".directs__left__text-box__text-input");
    const fileInput = $(".directs__left__text-box__file #file-input");
    const boxSendBtn = $(".directs__left__text-box__send");
    const boxLikeBtn = $(".directs__left__text-box__like");


    form.on("submit" , function(event){

        event.preventDefault();
        boxSendBtn.css("display" , "none");
        boxLikeBtn.css("display" , "block");
        txtInput.val("");

    })


    txtInput.on("keyup" , function(){

        const value = txtInput.val();

        if(value){
            boxSendBtn.css("display" , "block");
            boxLikeBtn.css("display" , "none");
        }else{
            boxSendBtn.css("display" , "none");
            boxLikeBtn.css("display" , "block");
        }
    })


    fileInput.on("change" , function(){

        form.submit();

        form.on("submit" , function(event){

            event.preventDefault();
    
        })

    })

    boxLikeBtn.on("click" , function(){

        form.submit();

        form.on("submit" , function(event){

            event.preventDefault();

        })

    })


    // color picker init

        const btnRun = document.querySelector(".directs__left__text-box__emoji svg");
        const emojiPicker = document.querySelector(".directs__left__text-box__emoji__emoji-picker");

        btnRun.addEventListener("click" , function(){

            emojiPicker.classList.toggle("directs__left__text-box__emoji__emoji-picker--show");

        })

        document.querySelector('.directs__left__text-box__emoji__emoji-picker emoji-picker').addEventListener('emoji-click', e => {
            insertText(document.querySelector('.directs__left__text-box__text-input'), e.detail.unicode);
            boxSendBtn.css("display" , "block");
            boxLikeBtn.css("display" , "none");
        })
})