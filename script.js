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

