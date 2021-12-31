let controller;
let slideScene;

function animationSlides() {
    // init controller
    controller = new ScrollMagic.Controller();
    // select element
    const sliders = document.querySelectorAll(".slide");
    const nav = document.querySelector(".nav-header");
    //loop over each slide
    sliders.forEach(slide => {
        const revealImg = document.querySelector(".reveal-img");
        console.log(revealImg);
        const img = document.querySelector("img");
        const revealText = document.querySelector(".reveal-text");
        //GSAP
        const slideTl = gsap.timeline({
            defaults: { duration: 1, ease: "power2.inOut" }
          });
          slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
          slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, '-=1');
          slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
          slideTl.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
    });
}
animationSlides();