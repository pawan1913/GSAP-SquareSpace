var tl = gsap.timeline()

tl.from("#nav img, #nav h3 ,#nav h4, #nav button",{
    y: -100,
    duration:2,
    delay:1,
    opacity:0,
    stagger:0.5
})
tl.from("#lastsec h1",{
   y: 100,
//    duration: 1,
//    delay:1,
   opacity:0,
   stagger:0.3
})

tl.from("#tu>img",{
    // scale:0,
    x:500,
    opacity:0,
    stagger:0.5,
    // duration: 2
})