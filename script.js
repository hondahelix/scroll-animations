const firstGif = document.querySelector('.first-gif');
const   firstScene = firstGif.querySelector('video');
//end section
const section = document.querySelector('section');
const end = section.querySelector('.second-gif')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 7200,
    triggerElement: firstGif,
    triggerHook: 0
})
.addIndicators()
.setPin(firstGif)
.addTo(controller)



//video animation 
let accelamount = 0.1;
let scrollpos =0;
let delay = 0;

scene.on('update', e =>{
    scrollpos = e.scrollPos/1000;
});

setInterval(()=>{
    delay += (scrollpos - delay) * accelamount;
    //console.log(delay);
    firstScene.currentTime = delay;
    //fames/1000 
},100);