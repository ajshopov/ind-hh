import Glide from '@glidejs/glide'

(function(){
    'use strict';

    const carousel = document.querySelector('.glide');

    if (carousel) {
        new Glide('.glide', {
            type: 'carousel',
            gap: 0,
            autoplay: 5000
        }).mount()
    }
    
}());
