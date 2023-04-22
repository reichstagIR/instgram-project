import "../node_modules/swiper/swiper-bundle.js";

$(document).ready(function(){

    
    
    const regexForValidateMobileNumber = /^((\+98|0)9\d{9})$/m;
    
    // set input focus label animation 

    $(".login-card__form-changer__body__input-wrapper__input").on("focus" , function(){

        $(this).parent("div").siblings().parent(".login-card__form-changer__body__input-wrapper").addClass("login-card__form-changer__body__input-wrapper--focus");
    
    })

    $(".login-card__form-changer__body__input-wrapper__input").on("blur" , function(){
        if(!$(this).val()){

            $(this).parent("div").siblings().parent(".login-card__form-changer__body__input-wrapper").removeClass("login-card__form-changer__body__input-wrapper--focus");
        
        }
    })

    //set forms position

    $(".login-card__form-changer").each(function(index){

        this.style.transform = `translateX(${32 * (index + 1)}rem)`;

    })


    //edit icon handler

    $(".login-card__form-changer__header__edit-icon").on("click" , function(){
        $(this).parent("div").parent("div").parent("div").removeClass("login-card__form-changer--active");
        $("#auth-request-sms").parent("div").parent("div").addClass("login-card__form-changer--active")
    });
    
    //timer handler

    const timerElementWrapper = $(".login-card__form-changer__header__timer-wrapper");
    const timerElement = $(".login-card__form-changer__header__timer-wrapper__timer");
    const timerElementResendSms = $(".login-card__form-changer__header__resend-sms");

    let timer;
    //check timer Status;
    let isTimerOn = false;
    
    function setTimer(){
        
        let second = 60;

        timer = setInterval(() => {

            isTimerOn = true;

            if(second > 0){

                second--;
                second < 10 ? second =  "0" + second : second;
                timerElement.text(`0:${second}`);

            }else{

                isTimerOn = false;

                clearInterval(timer);

                timerElementWrapper.css("display" , "none");
                timerElementResendSms.css("display" , "block");

                timerElementResendSms.on("click" , function(){

                    timerElementWrapper.css("display" , "block");
                    timerElementResendSms.css("display" , "none");

                    isTimerOn = true;

                    setTimer();

                });
            }

        } , 1000)

        if(second === 0){
        }
    }



    // validation form inputs 

    const authRequestSms = $("#auth-request-sms");
    const authEnterSms = $("#auth-enter-sms");
    const authEnterPassword = $("#auth-enter-password");
    const mobileNumberInput = $("#mobile-number-input");
    const smsNumberInput = $("#sms-number-input");
    const passwordInput = $("#password-input");

    authRequestSms.on("submit" , function(event){

        event.preventDefault();


        if(!mobileNumberInput.val()){

            mobileNumberInput.parent("div").parent(".login-card__form-changer__body__input-wrapper").addClass("login-card__form-changer__body__input-wrapper--fail");
        
        }else if(!regexForValidateMobileNumber.test(mobileNumberInput.val())){

            mobileNumberInput.parent("div").parent(".login-card__form-changer__body__input-wrapper").addClass("login-card__form-changer__body__input-wrapper--fail");
        
        }else{

            authEnterSms.parent("div").parent("div").addClass("login-card__form-changer--active");
            authRequestSms.parent("div").parent("div").removeClass("login-card__form-changer--active");
            mobileNumberInput.parent("div").parent(".login-card__form-changer__body__input-wrapper").removeClass("login-card__form-changer__body__input-wrapper--fail");
            
            if(!isTimerOn){
                setTimer();
            }

        }


    })

    authEnterSms.on("submit" , function(event){


        if(!smsNumberInput.val()){
 
            smsNumberInput.parent("div").parent(".login-card__form-changer__body__input-wrapper").addClass("login-card__form-changer__body__input-wrapper--fail");
            event.preventDefault();
    
        }
        
    });

    authEnterPassword.on("submit" , function(event){

        if(!passwordInput.val()){

            event.preventDefault();
            passwordInput.parent("div").parent(".login-card__form-changer__body__input-wrapper").addClass("login-card__form-changer__body__input-wrapper--fail");

        }

    })
})