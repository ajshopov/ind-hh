(function(){
    'use strict';
    
//sidenav sub menu

    const sideNavButtons = document.querySelectorAll('.smp-subnav__title button');
    // forEach only supported on IE9 and above for arrays but not for NodeList
    const sideNavBtnsArray = Array.prototype.slice.call(sideNavButtons);

    sideNavBtnsArray.forEach((button) => {
        let liContainer = button.parentNode.parentElement;
        let thirdLevel = button.parentNode.parentNode.lastElementChild;
        button.addEventListener('click', () => {
            thirdLevel.classList.toggle('active');
            liContainer.classList.toggle('active');
        })
    })

}());
