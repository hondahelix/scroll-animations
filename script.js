
const firstVideo = document.querySelector('.first-video');
const firstScene = firstVideo.querySelector('video');

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    offset: 1,
    duration: 11000,
    triggerElement: firstVideo,
    triggerHook: 0
})
.setPin(firstVideo)
.addTo(controller)
//.addIndicators()

//video animation 
let accelamount = 0.1;
let scrollpos =0;
let delay = 0;
let interval = 100;

scene.on('update', e =>{
    scrollpos = e.scrollPos/1000;
    //console.log(scrollpos);
});
//first part of the video is 10 fps so 1000/10 and then other portion is 20 fps so 1000/20 
//helps the delay run more smoothly
if(delay >9.25){
    interval = 50;
}
setInterval(()=>{
    //delays the scroll so it catches up when it stops
    delay += (scrollpos - delay) * accelamount;
    firstScene.currentTime = delay;
},interval);