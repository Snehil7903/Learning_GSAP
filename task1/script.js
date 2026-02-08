const tl = gsap.timeline();

tl.from(".hero-title", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
})
.from(".hero-sub", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
}, "-=0.6")
.from(".hero-btn", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power4.out"
}, "-=0.5");
