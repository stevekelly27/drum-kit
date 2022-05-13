/**
 * iterates through all the data-url sounds 
 * plays corrisponding sound when clicking on individual pads
 */

 let instrumentPads = document.querySelectorAll('.pads');

 for (let pad of instrumentPads) {
 
   let soundUrl = pad.dataset.url;    
 
   pad.addEventListener('click', function(event) {
     playSound(soundUrl);
   });
   
 }
 
 
 /**failed attempt at getting the volume slider working */
 
 // // getting the audio files
 let audio = new Audio('../sounds/triangle.mp3');
 
 // getting the volume slider
 let volume = document.querySelector("#volumeslider");
 
 // add event listener to listen to the volume input field (slider)
 volume.addEventListener("onchange", function(e) {
     console.log(audio.volume);
     playSound(soundUrl).volume = e.currentTarget.value / 100;
 });
 
 
 function thisVolume(volume_value) {
     
     let vol = document.getElementById("volumeslider");
     vol.addEventListener("change", function(e) {
     audio.vol = e.currentTarget.value / 100;
 }
     )}
 
 
 
 
 
 /**
  * targets the keydown and keyup events to activate the css transform
  */
 // first row
 // r key
 document.addEventListener('keydown', (event) => {
         var instrument= document.getElementById("triangle");
         if (event.key === 'r') {
         instrument.classList.add("active");
         }
     });
 
     document.addEventListener('keyup', (event) => {
         var instrument= document.getElementById("triangle");
         if (event.key === 'r') {
         instrument.classList.remove("active");
         }
     });
 
 // t key
     document.addEventListener('keydown', (event) => {
         var instrument= document.getElementById("closed-hihat");
         if (event.key === 't') {
         instrument.classList.add("active");
         }
     });
 
     document.addEventListener('keyup', (event) => {
         var instrument= document.getElementById("closed-hihat");
         if (event.key === 't') {
         instrument.classList.remove("active");
         }
     });
     
 // y key
     document.addEventListener('keydown', (event) => {
         var instrument= document.getElementById("open-hihat");
         if (event.key === 'y') {
         instrument.classList.add("active");
         }
     });
 
     document.addEventListener('keyup', (event) => {
         var instrument= document.getElementById("open-hihat");
         if (event.key === 'y') {
         instrument.classList.remove("active");
         }
     });
 
 // second row
 // f key
     document.addEventListener('keydown', (event) => {
         var instrument= document.getElementById("tom1");
         if (event.key === 'f') {
         instrument.classList.add("active");
         }
     });
 
     document.addEventListener('keyup', (event) => {
         var instrument= document.getElementById("tom1");
         if (event.key === 'f') {
         instrument.classList.remove("active");
         }
     });
 
 // g key
     document.addEventListener('keydown', (event) => {
         var instrument= document.getElementById("cclap");
         if (event.key === 'g') {
         instrument.classList.add("active");
         }
     });
 
     document.addEventListener('keyup', (event) => {
         var instrument= document.getElementById("cclap");
         if (event.key === 'g') {
         instrument.classList.remove("active");
         }
     });
 
 // h key
     document.addEventListener('keydown', (event) => {
         var instrument= document.getElementById("crash");
         if (event.key === 'h') {
         instrument.classList.add("active");
         }
     });
 
     document.addEventListener('keyup', (event) => {
         var instrument= document.getElementById("crash");
         if (event.key === 'h') {
         instrument.classList.remove("active");
         }
     });
 
 // third row
 // v key
     document.addEventListener('keydown', (event) => {
         var instrument= document.getElementById("kick3");
         if (event.key === 'v') {
         instrument.classList.add("active");
         }
     });
     
     document.addEventListener('keyup', (event) => {
         var instrument= document.getElementById("kick3");
         if (event.key === 'v') {
         instrument.classList.remove("active");
         }
     });
     
 // b key
     document.addEventListener('keydown', (event) => {
         var instrument= document.getElementById("snare2");
         if (event.key === 'b') {
         instrument.classList.add("active");
         }
     });
     
     document.addEventListener('keyup', (event) => {
         var instrument= document.getElementById("snare2");
         if (event.key === 'b') {
         instrument.classList.remove("active");
         }
     });
     
 // n key
     document.addEventListener('keydown', (event) => {
         var instrument= document.getElementById("bomb-blast");
         if (event.key === 'n') {
         instrument.classList.add("active");
         }
     });
     
     document.addEventListener('keyup', (event) => {
         var instrument= document.getElementById("bomb-blast");
         if (event.key === 'n') {
         instrument.classList.remove("active");
         }
     });
     
 
 /**
  * calls the function playSound() to target individual keys for the drum pad
  */
 
 window.addEventListener('keydown', (event) => {
 
     if (event.key === 'r') {
         playSound('sounds/triangle.mp3');
     }
 
     if (event.key === 't') {
         playSound('sounds/closed-hihat.mp3');
     }
 
     if (event.key === 'y') {
         playSound('sounds/open-hihat.mp3');
     }
 
     if (event.key === 'f') {
         playSound('sounds/tom1.mp3');
     }
 
     if (event.key === 'g') {
         playSound('sounds/cclap.mp3');
     }
 
     if (event.key === 'h') {
         playSound('sounds/crash.mp3');
     }
 
     if (event.key === 'v') {
         playSound('sounds/kick3.mp3');
     }
 
     if (event.key === 'b') {
         playSound('sounds/snare2.mp3');
     }
 
     if (event.key === 'n') {
         playSound('sounds/bomb-blast.wav');
     }
 
 });
 
 /**
  * 
  * @param {data-url} soundUrl 
  * gets the data-Url containing the sound samples in the HTML
  */
 
 function playSound(soundUrl) {
     var audio = new Audio(soundUrl);
     audio.play();
 }
 