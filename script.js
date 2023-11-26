document.addEventListener("DOMContentLoaded", function() {
    // Animation timeline
    var tl = gsap.timeline();

    // Set initial positions of the elements
    tl.set('.homepage', { x: "-110%" });
    tl.set('#homeSlide', { x: "-110%" });
    tl.set('.homepage2', { x: "110%" });

    // Animation for the homepage
    tl.to('.homepage', { x: "0%", duration: 1, ease: "power2.out" });

    // Animation for homeSlide
    tl.to('#homeSlide', { x: "00%", duration: 1.2, ease: "power2.out" }, "-=0.5");

    // Animation for homepage2
    tl.to('.homepage2', { x: "0%", duration: 1.5, ease: "power2.out" }, "-=0.5");
});

document.addEventListener("DOMContentLoaded", function() {
    // Animation timeline
    var tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Set initial rotation
    tl.set('#swingingImg', { transformOrigin: '40% 90%', rotation: 0 });

    // Add swinging animation
    tl.to('#swingingImg', { rotation: 8, duration: 0.5, ease: "power1.inOut" });
    tl.to('#swingingImg', { rotation: -8, duration: 1, ease: "power1.inOut" });
});

document.addEventListener("DOMContentLoaded", function() {
    // Animation timeline
    var tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Set initial rotation
    tl.set('#swingingImg1', { transformOrigin: '90% 50%', rotation: 0 });

    // Add swinging animation
    tl.to('#swingingImg1', { rotation: -10, duration: 0.5, ease: "power1.inOut" });
    tl.to('#swingingImg1', { rotation: 10, duration: 1, ease: "power1.inOut" });
});

document.addEventListener("DOMContentLoaded", function() {
    // Animation timeline
    var tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Set initial rotation
    tl.set('#smallIcon2', { transformOrigin: '70% 40%', rotation: 0 });

    // Add swinging animation
    tl.to('#smallIcon2', { rotation: -9, duration: 0.4, ease: "power1.inOut" });
    tl.to('#smallIcon2', { rotation: 11, duration: 0.7, ease: "power1.inOut" });
});
document.addEventListener("DOMContentLoaded", function() {
    // Animation timeline
    var tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Set initial rotation
    tl.set('#smallIcon1', { transformOrigin: '100% 90%', rotation: 0 });

    // Add swinging animation
    tl.to('#smallIcon1', { rotation: -20, duration: 0.5, ease: "power1.inOut" });
    tl.to('#smallIcon1', { rotation: 20, duration: 0.6, ease: "power1.inOut" });
});



