var tl=gsap.timeline();

tl.from("#page1 h3",{
    y:-100,
    duration:2,
    ease:Expo.easeInOut
})
.to("#growth",{
    width:"100%",
    duration:1.5,
    ease:Expo.easeInOut
},'-=1')
.to("#page1",{
    left:"150%",
    ease:Expo.easeInOut,
    display:"none",
    duration:3,
    delay:0.5
},'-=0.5')
.from("#page2,#page2 img",{
    y:200,    
    opacity:0,
    duration:1,
    ease:Expo.ease
},'-=0.5')
.from("#nav,#back,#text h4,#text h1,#text p,#textbottom,#follow,#circleline",{
     x:-10,
     y:20,
     opacity:0,
     ease:Expo.easeInOut,
     stagger:1,
     duration:1.5
})

.from("#i1,#i2,#i3,#us,#i4",{
     y:50,
     opacity:0,
     ease:Expo.easeInOut,
     stagger:1,
     duration:1
},'-=2')