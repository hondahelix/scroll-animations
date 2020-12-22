
const firstVideo = document.querySelector('.first-video');
const firstScene = firstVideo.querySelector('video');

// const intro = document.querySelector('.first-video');
// const IntroText = intro.querySelector('intro-text');
//end section
//const section = document.querySelector('section');
//const end = section.querySelector('.second-gif')

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 11000,
    triggerElement: firstVideo,
    triggerHook: 0
})
.addIndicators()
.setPin(firstVideo)
.addTo(controller)

//video animation 
let accelamount = 0.1;
let scrollpos =0;
let delay = 0;
let interval = 100;
// let buttonPress = true;

scene.on('update', e =>{
    scrollpos = e.scrollPos/1000;
    console.log(scrollpos);
});
//becasue other gif was 50fps it changes interval from 100 to 50 when it gets to it
if(delay >9.25){
    interval = 50;
}
setInterval(()=>{
    //delays the scroll so it catches up when it stops
    delay += (scrollpos - delay) * accelamount;
    firstScene.currentTime = delay;
},interval);

