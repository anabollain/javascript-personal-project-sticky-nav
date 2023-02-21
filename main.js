'use strict';

//VARIABLES
const navMenu = document.querySelector('.js-nav-menu');
const topOfNavMenu = navMenu.offsetTop;

//FUNCTIONS
function fixNavMenu() {
    //Grab top position of the navigation menu
    console.log(topOfNavMenu)
    //Compare it to the scroll vertical position
    if(window.scrollY >= topOfNavMenu){
        //We put the class in the body so that we will be able other elements inside it to change or modify their style
        document.body.classList.add('js-fixed-nav');
    }else{
        document.body.classList.remove('js-fixed-nav');
    }
}


//EVENT LISTENERS
window.addEventListener('scroll', fixNavMenu);