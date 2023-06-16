'use strict';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    });
    
    //                               value before animation
    gsap.fromTo('.first-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.first-section', // trigger element
            // when it comes into view, the following events will appear
            start: 'center',
            end: 'bottom',
            scrub: true // return the previous value
        }
    });

    let itemsL = gsap.utils.toArray('.second-section__gallery-column_left .second-section__gallery-item');

    itemsL.forEach(item => {
        gsap.fromTo(item, { x: -500, opacity: 0 }, {
            x: 0, opacity: 1,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        });
    });

    let itemsR = gsap.utils.toArray('.second-section__gallery-column_right .second-section__gallery-item');

    itemsR.forEach(item => {
        gsap.fromTo(item, { x: 500, opacity: 0 }, {
            x: 0, opacity: 1,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        });
    });
};