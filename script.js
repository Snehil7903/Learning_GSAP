gsap.from(".title", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});



gsap.from(".box", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: {
    each: 0.15,
    from: "start"
  }
});

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

gsap.from(".f-title", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

gsap.from(".f-sub", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power4.out"
});

gsap.from("f-btn", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: "power4.out"
});

