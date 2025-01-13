document.addEventListener('DOMContentLoaded', function(){
    //==for=search=====================//
    document.addEventListener('click', function(event){
        if(event.target.closest('.nav-search')){
            document.querySelector('.search-bar').classList.add('search-bar-active');
        }
        else if(event.target.closest('.search-cancel')){
            document.querySelector('.search-bar').classList.remove('search-bar-active');
        }
    });

     //==for=Login-Signup=====================//
    document.addEventListener('click', function(event){
        // check if  the user clicked element has the class "user" or "already-account" then show login
        if (event.target.closest('.nav-user, .already-account')) {
            const formElement = document.querySelector('.form');
            formElement.classList.add('login-active');
            formElement.classList.remove('sign-up-active');
        }

        // check if  the user clicked element has the class "sign-up-btn" then show signup
        else if (event.target.closest('.sign-up-btn')) {
            const formElement = document.querySelector('.form');
            formElement.classList.remove('login-active');
            formElement.classList.add('sign-up-active');
        }

        // check if  the user clicked element has the class "form-cancel" then close all
        else if (event.target.closest('.form-cancel ')) {
            const formElement = document.querySelector('.form');
            formElement.classList.remove('login-active');
            formElement.classList.remove('sign-up-active');
        }
    });

});