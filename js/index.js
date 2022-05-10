function playTriangle(event) {
    var audio = new Audio('sounds/triangle.mp3');
    audio.play();
}

function playClosedHIhat(event) {
    var audio1 = new Audio('sounds/closed-hihat.mp3');
    audio1.play();
}

function playOpenHihat(event) {
    var audio2 = new Audio('sounds/open-hihat.mp3');
    audio2.play();
}

function playSymbal(event) {
    var audio3 = new Audio('sounds/symbal2.mp3');
    audio3.play();
}

function playBell(event) {
    var audio4 = new Audio('sounds/aluminum-reflector-bell.wav');
    audio4.play();
}

function playClang(event) {
    var audio5 = new Audio('sounds/backwards-clang.wav');
    audio5.play();
}

function playClap(event) {
    var audio6 = new Audio('sounds/cclap.mp3');
    audio6.play();
}

function playCrash(event) {
    var audio7 = new Audio('sounds/crash.mp3');
    audio7.play();
}

function playTom2(event) {
    var audio8 = new Audio('sounds/tom2.mp3');
    audio8.play();
}

function playKick1(event) {
    var audio9 = new Audio('sounds/kick1.mp3');
    audio9.play();
}

function playTom1(event) {
    var audio10 = new Audio('sounds/tom1.mp3');
    audio10.play();
}

function playBomb(event) {
    var audio11 = new Audio('sounds/bomb-blast.wav');
    audio11.play();
}

function playKick3(event) {
    var audio12 = new Audio('sounds/kick3.mp3');
    audio12.play();
}

function playSnare(event) {
    var audio13 = new Audio('sounds/snare.mp3');
    audio13.play();
}

function playKick2(event) {
    var audio14 = new Audio('sounds/kick2.mp3');
    audio14.play();
}

function playSnare2(event) {
    var audio15 = new Audio('sounds/snare2.mp3');
    audio15.play();
}

window.addEventListener('keydown', (event) => {
    if (event.key === '4') {
        playTriangle(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === '5') {
        playClosedHIhat(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === '6') {
        playOpenHihat(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === '7') {
        playSymbal(event);
    }
})


window.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playBell(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 't') {
        playClang(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'y') {
        playClap(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'u') {
        playCrash(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'f') {
        playTom2(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'g') {
        playKick1(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        playTom1(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'j') {
        playBomb(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'v') {
        playKick3(event);
    }
})


window.addEventListener('keydown', (event) => {
    if (event.key === 'b') {
        playSnare(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'n') {
        playKick2(event);
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'm') {
        playSnare2(event);
    }
})

// const sounds = {
//     'pad1' : 'sounds/triangle.mp3',
//     'pad2' : 'sounds/closed-hihat.mp3',
//     'pad3' : 'sounds/open-hihat.mp3',
//     'pad4' : 'sounds/symbal2.mp3',

//     'pad5' : 'sounds/aluminum-reflector-bell.wav',
//     'pad6' : 'sounds/backwards-clang.wav',
//     'pad7' : 'sounds/cclap.mp3',
//     'pad8' : 'sounds/crash.mp3',

//     'pad9' : 'sounds/tom2.mp3',
//     'pad10' : 'sounds/kick1.mp3',
//     'pad11' : 'sounds/tom1.mp3',
//     'pad12' : 'sounds/bomb-blast.wav',

//     'pad13' : 'sounds/kick3',
//     'pad14' : 'sounds/snare.mp3',
//     'pad15' : 'sounds/kick2',
//     'pad16' : 'sounds/snare2.mp3',
// }

// const Drumpads = document.getElementsByClassName('drum-pads');

// const pads = document.querySelectorAll('.pads');

// for (let pad of pads) {
//     pad.addEventListener('click', playSound)
//   }






// function playSound(event) {

//     const sounds = {
//         'pad1' : 'sounds/triangle.mp3',
//         'pad2' : 'sounds/closed-hihat.mp3',
//         'pad3' : 'sounds/open-hihat.mp3',
//         'pad4' : 'sounds/symbal2.mp3',
    
//         'pad5' : 'sounds/.mp3',
//         'pad6' : 'sounds/.mp3',
//         'pad7' : 'sounds/cclap.mp3',
//         'pad8' : 'sounds/crash.mp3',
    
//         'pad9' : 'sounds/tom2.mp3',
//         'pad10' : 'sounds/kick1.mp3',
//         'pad11' : 'sounds/tom1.mp3',
//         'pad12' : 'sounds/.mp3',
    
//         'pad13' : 'sounds/kick3',
//         'pad14' : 'sounds/snare.mp3',
//         'pad15' : 'sounds/kick2',
//         'pad16' : 'sounds/snare2.mp3',
//     }

//     let clickedPad = event.target;

//     let audio = new Audio(sounds['pad[i]'])

//     audio.play;
// };








// $(document).ready(function() {

//     var padOne = new Audio('sounds/triangle.mp3');
//     $('.pad1').mousedown(function() {
//       padOne.load()
//       padOne.play();
//     });
// });       