document.addEventListener("DOMContentLoaded", function() {
    // Animation timeline
    var tl = gsap.timeline();

    // Set initial positions of the elements
    tl.set('.homepage', { x: "-110%" });
    // tl.set('#homeSlide', { x: "-110%", y: "20%" });
    tl.set('.homepage2', { x: "110%" });

    // Animation for the homepage
    tl.to('.homepage', { x: "0%", duration: 1, ease: "power2.out" });

    // Animation for homeSlide
    // tl.to('#homeSlide', { x: "0%", duration: 1.2, ease: "power2.out" }, "-=0.5");

    // Animation for homepage2
    tl.to('.homepage2', { x: "0%", duration: 1.5, ease: "power2.out" }, "-=0.5");
});

document.addEventListener("DOMContentLoaded", function() {
    // Animation timeline
    var tl = gsap.timeline({ repeat: 1, yoyo: true });

    // Set initial rotation
    tl.set('#swingingImg', { transformOrigin: '50% 90%', rotation: 0 });

    // Add swinging animation
    tl.to('#swingingImg', { rotation: 10, duration: 0.5, ease: "power1.inOut" });
    tl.to('#swingingImg', { rotation: -10, duration: 1, ease: "power1.inOut" });
});

document.addEventListener("DOMContentLoaded", function() {
    // Animation timeline
    var tl = gsap.timeline({ repeat: 1, yoyo: true });

    // Set initial rotation
    tl.set('#swingingImg1', { transformOrigin: '90% 50%', rotation: 0 });

    // Add swinging animation
    tl.to('#swingingImg1', { rotation: -10, duration: 0.5, ease: "power1.inOut" });
    tl.to('#swingingImg1', { rotation: 10, duration: 1, ease: "power1.inOut" });
});

//use the defaults
gsap.to(element, {duration: 1, scrambleText: "Catlana Ragdoll Cats | Adorable Ragdoll kittens in Idaho"});//or customize things:

