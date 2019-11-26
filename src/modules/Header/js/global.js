(function(){
    'use strict';


// toggles hamburger menu

    const navMenu = document.querySelector('.header__menu');
    const hamburgerButton = document.querySelector('.hamburger-menu-icon');

    function toggleHamburger() {
        navMenu.classList.toggle('show-hamburger');
        hamburgerButton.classList.toggle('icon-hamburger-btn');
        hamburgerButton.classList.toggle('icon-cross');
    }

    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', toggleHamburger);
    }



// hide hamburger when switching to desktop view

    const desktopBreakPoint = window.matchMedia("(min-width: 64rem)");
    // Checking view port and set to store if mobile or not

    desktopBreakPoint.addListener(mq => {
        if(mq.matches) {
            navMenu.classList.remove('show-hamburger');
            hamburgerButton.classList.add('icon-hamburger-btn');
            hamburgerButton.classList.remove('icon-cross');
        }
    });


// toggles search bar

    const searchButton = document.querySelector('.search-bar-icon');
    const searchBar = document.querySelector('.search-bar');

    function toggleSearchBar() {
        searchBar.classList.toggle('show-search');
        searchButton.classList.toggle('icon-search');
        searchButton.classList.toggle('icon-cross');
    }

    if (searchButton) {
        searchButton.addEventListener('click', toggleSearchBar);
    }


// toggles search-input placeholder text

    const searchInput = document.getElementById('search-input');
    const tabletBreakPoint = window.matchMedia("(min-width: 48rem)");
    
    function responsivePlaceholder(mq) {
        if (mq.matches) {
            searchInput.setAttribute("placeholder", "Search for stories, volunteers or pages")
        } else {
            searchInput.setAttribute("placeholder", "Search website")
        }
    }

    tabletBreakPoint.addListener(responsivePlaceholder);


}());
