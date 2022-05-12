let instrumentPads = document.querySelectorAll('.pads')

for (let pad of instrumentPads) {

  let soundUrl = pad.dataset.url    

  pad.addEventListener('click', function(event) {
    playSound(soundUrl)
  })
  
}

let audio = new Audio('sounds/triangle.mp3', 'sounds/closed-hihat.mp3', 'sounds/open-hihat.mp3')

let sound = document.querySelectorAll('data-url')

let volume = document.querySelector("#volumeslider");
audio.addEventListener("change", function(e) { console.log(audio.volume)
audio.volume = (`e.currentTarget.value / 100`);
});


document.addEventListener("keydown", function(event) {
    instrumentPads.forEach(e1 =>
        e1.classList.add('active'));
});

document.addEventListener("keyup", function(event) {
    instrumentPads.forEach(e1 =>
        e1.classList.remove('active'));
});


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


function playSound(soundUrl) {
    var audio = new Audio(soundUrl);
    audio.play();
};

