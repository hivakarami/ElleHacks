/* GSAP TIMELINE */
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

/* TEXT ANIMATION */
tl.to(".text", {
  y: "0%",
  duration: 1.5,
  stagger: 0.25
});

tl.to(".intro",{
  y: "-100%",
  duration: 1,
}); /* , "-=1" */





/* HOME PAGE CONTENT ANIMATION */
tl.fromTo(".big-text",
          {opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=1");



function delayer(){
    window.location = "intro.html";
}