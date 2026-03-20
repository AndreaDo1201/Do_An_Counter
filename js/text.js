var tl = new TimelineMax({
  paused:true
});

tl.fromTo(".anim-typewriter", 8, {
  width: "0",
}, {
  width: "20.18em", 
  ease:  SteppedEase.config(37)
}, 0);

tl.fromTo(".anim-typewriter", 0.5, {
  "border-right-color": "rgba(255,255,255,0.75)"
}, {
  "border-right-color": "rgba(255,255,255,0)",
  repeat: -1,
  ease:  SteppedEase.config(37)
}, 0);

tl.play();