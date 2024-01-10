// var card= document.querySelectorAll(".card")
// card.forEach(function(a){
   
// })
gsap.from(".first",{
    y:"1000%",
    duration:2,
})
gsap.from(".second",{
    x:"1000%",
    duration:2,
})
gsap.from(".third",{
    y:"-1000%",
    duration:2,
})
gsap.from(".fourth",{
    x:"-1000%",
    duration:2,
})
gsap.from(".fifth",{
    y:"1000%",
    x:"-1000%",
    delay:.2,
    duration:2,
})