gsap.to(".nav-bar",{
  backgroundColor : "black",
  duration : 0.5,
  height : "120px",

  scrollTrigger:{
    trigger:"nav-bar",
    scroller:"body",
    //markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
  }
})

gsap.to(".main",{
  backgroundColor : "black",

  scrollTrigger:{
    trigger:".main",
    scroller:"body",
    //markers:true,
    start:"top -20%",
    end:"top 50%",
    scrub:2
  }
})