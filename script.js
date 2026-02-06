gsap.to(".title", {
    x: 200,
    duration: 2
    });
    
gsap.from(".box", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
});
