import "../../node_modules/swiper/swiper-bundle.js";

$(document).ready(function(){

    // run modal 

    // variables 

    const modalRunner = $(".modal-runner");
    const regularBtn = $(".modal-wrapper__btn--cancel");
    const selectedItemsFormShareModal = $(".modal-wrapper--share-modal__modal-section__selected-items__form");
    const btnSendFormShareModal = $(".modal-wrapper__btn-send");
    const btnCloseIcon = $(".modal-wrapper__btn-close-icon");

    modalRunner.on("click" , function(){


        $(this).next(".modal-bgc").css("display" , "flex");
        $("body").css("overflow" , "hidden");
    
    })


    regularBtn.on("click" , function(){

        $(this).parent().parent().css("display" , "none");
        $("body").css("overflow" , "auto");

    })

    
    $(".modal-wrapper--share-modal__accounts-section__account__svg").on("click" , function(){

        const accountSvgIconShareModal = $(this);
        
        const selectedItemsShareModals = $(".modal-wrapper--share-modal__modal-section__selected-items__selected-item");

        const accountUsername = accountSvgIconShareModal.parent().children("div").children().children(".modal-wrapper--share-modal__accounts-section__account__username").text();
    

        const node = `<div class="modal-wrapper--share-modal__modal-section__selected-items__selected-item"> <p class="modal-wrapper--share-modal__modal-section__selected-items__selected-item__username">${accountUsername}</p><svg class="modal-wrapper--share-modal__modal-section__selected-items__selected-item__delete-btn" aria-label="Delete Item" class="_ab6-" color="#0095f6" fill="#0095f6" height="12" role="img" viewBox="0 0 24 24" width="12"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg></div>`;
        

        // activate or deactivate svg accoun icon

        $(this).toggleClass("modal-wrapper--share-modal__accounts-section__account__svg--active");

        // add or delete select item

        if(accountSvgIconShareModal.hasClass("modal-wrapper--share-modal__accounts-section__account__svg--active")){

            selectedItemsFormShareModal.before(node);

        }else{

            selectedItemsShareModals.each(function(){

                const selectedItemsShareModal = $(this);

                const selectedUserName = selectedItemsShareModal.children(".modal-wrapper--share-modal__modal-section__selected-items__selected-item__username").text();

                if(selectedUserName === accountUsername){

                    $(this).remove();

                }

            })
        }

        //disable or enable btn send 

        sendBtnStatus();

        // delete or insert account name to selected item by account btn

        $(".modal-wrapper--share-modal__modal-section__selected-items__selected-item__delete-btn").on("click" , function(){



            const selectedItemDeleteBtn = $(this);

            const selectedItemUser = selectedItemDeleteBtn.prev().text();
            const accountsUserNames = $(".modal-wrapper--share-modal__accounts-section__account__username");


            
            accountsUserNames.each(function(){

                const accountsUserName = $(this);

                if(selectedItemUser === accountsUserName.text()){
                    accountsUserName.parent().parent().next().removeClass("modal-wrapper--share-modal__accounts-section__account__svg--active");
                }

            })


            selectedItemDeleteBtn.parent("div").remove();


            //disable or enable btn send 

            sendBtnStatus();


        })


    })

    btnCloseIcon.on("click" , function(){

        $(this).parent().parent().css("display" , "none");
        $("body").css("overflow" , "auto");

        $(".modal-wrapper--share-modal__modal-section__selected-items__selected-item").each(function(){
            $(this).remove();
        });

        $(".modal-wrapper--share-modal__accounts-section__account__svg").each(function(){
            $(this).removeClass("modal-wrapper--share-modal__accounts-section__account__svg--active");
        });

    })



    function sendBtnStatus(){

        const selectedItemsShareModals = $(".modal-wrapper--share-modal__modal-section__selected-items__selected-item");


        if(selectedItemsShareModals.length){

            btnSendFormShareModal.prop('disabled', false);
        
        }else{
    
            btnSendFormShareModal.prop('disabled', true);
        }

    }

})